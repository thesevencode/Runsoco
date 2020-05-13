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
        points+=1
        order.client = req.user._id
        order.state.push({type: "completed"})

        try{
            await Sale.create(order) //Agregamos los datos a la colección
            await Client.createOrUpdate({_id: req.user._id, points}) //actualizamos los puntos del cliente
            await Receive.update(order) // actualizamos 

            // await Receive.deleteById(order._id) // eliminamos

            // EMITIMOS AL ADMINISTRADOR QUE EL PEDIDO HA SIDO CONFIRMADO
            socket.emit('sale-confirmation', order)

            res.status(200).json({
                status: true,
                message: 'Operacion exitosa, pedido creado!',
            })

        } catch (e) {
            //ERROR de la base de datos
            const err = new APIError('Algo salio mal, intentelo de nuevo mas tarde!', httpStatus.INTERNAL_SERVER_ERROR, true)
            return next(err)
        }



    }

    async function getReceiveList(req, res, next) {
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

    async function getProcessingList(req, res, next) {
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

    async function postReceiveAccept(req, res, next) {
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

    async function postReceiveRefuse(req, res, next) {
        const  {sale} = req.body
        let order = await findById(Receive, sale, next)

        console.log("Order:", order)

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
        getReceiveList,
        getProcessingList,
        postReceiveAccept,
        postReceiveRefuse
    }

}