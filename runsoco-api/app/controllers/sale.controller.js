'use strict'

const httpStatus = require('http-status')

const APIError = require('../helper/APIError')
const ExpoPushNotification = require('../helper/ExpoPushNotification');


const socket = require('../../socket')()

const DB = require('../../db')

module.exports =  async ()=>{

    const { Sale, Receive, Client } = await DB()


    async function register(req, res, next) {
        let order = req.body
        order.state = []
        order.state.push({type: "receive"})
        order.client = req.user._id

        let sale
        try{
        
            sale = await Receive.create(order)
            // //EMITIR EVENTOS
            socket.emit('new-sale', sale)

            res.status(200).json({
                status: true,
                message: 'Operacion exitosa, pedido creado!',
                data: sale._id
            })

        } catch (e) {
            //ERROR de la base de datos
            const err = new APIError('Algo salio mal, intentelo de nuevo mas tarde!', httpStatus.INTERNAL_SERVER_ERROR, true)
            return next(err)
        }

    }

    async function confirmation(req, res, next) {
        const { idOrder } = req.params

        let order
        try{
            
            order = await Receive.findById(idOrder).lean()
        } catch (e) {
            //ERROR de la base de datos
            const err = new APIError('Algo salio mal, intentelo de nuevo mas tarde!', httpStatus.INTERNAL_SERVER_ERROR, true)
            return next(err)
        }
        if(!order){
            return next(new APIError('El pedido no ha sido encontrado!', httpStatus.NOT_FOUND, true))
        }
        let { points } = order.client
        let { _id } = order
        points+=1
        order.client = req.user._id
        order.state.push({type: "completed"})
        delete order._id

        let newOrder
        try{
            newOrder = await Sale.create(order) //Agregamos los datos a la colección
            await Client.createOrUpdate({_id: req.user._id, points}) //actualizamos los puntos del cliente
            order._id = _id
            await Receive.update(order) // actualizamos 

            // await Receive.deleteById(order._id) // eliminamos

            // EMITIMOS AL ADMINISTRADOR QUE EL PEDIDO HA SIDO CONFIRMADO
            socket.emit('sale-confirmation', {newOrder, idLast: _id })

            res.status(200).json({
                status: true,
                message: 'Operacion exitosa, pedido creado!',
                id: newOrder._id
            })

        } catch (e) {
            //ERROR de la base de datos
            const err = new APIError('Algo salio mal, intentelo de nuevo mas tarde!', httpStatus.INTERNAL_SERVER_ERROR, true)
            return next(err)
        }



    }

    async function getReceive(req, res, next) {
        let lista
        try{
            
            lista = await Receive.findByEstadoReceive()
        } catch (e) {
            console.log(e)
            //ERROR de la base de datos
            const err = new APIError('Algo salio mal, intentelo de nuevo mas tarde!', httpStatus.INTERNAL_SERVER_ERROR, true)
            return next(err)
        }

        res.status(200).json({
            status: true,
            message: 'Operacion exitosa!',
            data: lista
        })

    }

    async function getProcessing(req, res, next) {
        let lista
        try{
            lista = await Receive.findByEstadoProcessing()
        } catch (e) {
            console.log(e)
            //ERROR de la base de datos
            const err = new APIError('Algo salio mal, intentelo de nuevo mas tarde!', httpStatus.INTERNAL_SERVER_ERROR, true)
            return next(err)
        }

        res.status(200).json({
            status: true,
            message: 'Operacion exitosa!',
            data: lista
        })

    }

    async function getCompleted(req, res, next) {
        let lista
        try{
            lista = await Receive.findByEstadoCompleted()
        } catch (e) {
            //ERROR de la base de datos
            const err = new APIError('Algo salio mal, intentelo de nuevo mas tarde!', httpStatus.INTERNAL_SERVER_ERROR, true)
            return next(err)
        }

        res.status(200).json({
            status: true,
            message: 'Operacion exitosa!',
            data: lista
        })

    }


    async function getSaleByClient(req, res, next){

        const {_id } = req.user
        let lista
        try{
            lista = await Receive.findByClient(_id)
        }catch(e){
            const err = new APIError('Algo salio mal, intentelo de nuevo mas tarde!', httpStatus.INTERNAL_SERVER_ERROR, true)
            return next(err)
        }

        res.status(200).json({
            status: true,
            message: 'Operacion exitosa!',
            data: lista
        })
    }

    async function postAccept(req, res, next) {
        const  {sale} = req.body
        let order = await findById(Receive, sale, next)
        order.state.push({ type: "processing" })
        try{
            await Receive.update(order)

            if(order.client.tokenPush){
                 //Enviar Notificación al usuario
                const notification = new ExpoPushNotification([order.client.tokenPush], {title: 'Runsoco', body: 'Tu pedido esta en camino!'})
                await notification.send()
            }

        
            res.status(200).json({
                status: true,
                message: 'Operacion exitosa!'
            })
        } catch (e) {
            //ERROR de la base de datos
            const err = new APIError('Algo salio mal, intentelo de nuevo mas tarde!', httpStatus.INTERNAL_SERVER_ERROR, true)
            return next(err)
        }

    }

    async function postRefuse(req, res, next) {
        const  {idSale, idClient} = req.body
        let client = await findById(Client, idClient, next)
        try{
            await Receive.deleteById(idSale)

            if(client.tokenPush){
                 //Enviar Notificación al usuario
                const notification = new ExpoPushNotification([client.tokenPush], {title: 'Runsoco', body: 'Lo sentimos su pedido no ha podido ser procesado!'})
                await notification.send()
            }
            
            res.status(200).json({
                status: true,
                message: 'Operacion exitosa!'
            })
        } catch (e) {
            //ERROR de la base de datos
            const err = new APIError('Algo salio mal, intentelo de nuevo mas tarde!', httpStatus.INTERNAL_SERVER_ERROR, true)
            return next(err)
        }

    }

    async function verification(req, res, next) {
        const { _id } = req.user
        let lista
        try{
            lista = await Receive.findByClient(_id)
        }catch(e){
            const err = new APIError('Algo salio mal, intentelo de nuevo mas tarde!', httpStatus.INTERNAL_SERVER_ERROR, true)
            return next(err)
        }

        if(lista){
            return next(new APIError('El usuario cuenta con un pedido actual', httpStatus.UNAUTHORIZED, true))
        }

        res.status(200).json({
            status: true,
            message: 'No cuenta con un pedido actual!'
        })

    }


    async function findById(ModelDB, id, next){
        let result
        try{
            
            result = await ModelDB.findById(id)
        } catch (e) {
            //ERROR de la base de datos
            const err = new APIError('Algo salio mal, intentelo de nuevo mas tarde!', httpStatus.INTERNAL_SERVER_ERROR, true)
            return next(err)
        }
        if(!result){
            return next(new APIError('No ha sido encontrado!', httpStatus.NOT_FOUND, true))
        }

        return result
    }

    return {
        register,
        getSaleByClient,
        confirmation,
        getReceive,
        getProcessing,
        getCompleted,
        postAccept,
        postRefuse,
        verification
    }

}