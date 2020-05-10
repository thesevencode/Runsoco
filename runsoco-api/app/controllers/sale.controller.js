'use strict'

const httpStatus = require('http-status')
const APIError = require('../helper/APIError');

const socket = require('../../socket')()

const DB = require('../../db')

module.exports =  async ()=>{

    const { Sale, Receive } = await DB()


    async function register(req, res, next) {
        let order = req.body
        order.state = []
        order.state.push({type: "receive"})

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

        order.state.push({type: "completed"})
        try{
            await Sale.create(order) //Agregamos los datos a la colección
            await Receive.deleteById(order._id) // eliminamos

            // EMITIMOS AL ADMINISTRADOR QUE EL PEDIDO HA SIDO CONFIRMADO
            socket.emit('sale-confirmation', order)

            res.status(200).json({
                status: true,
                message: 'Operacion exitosa, pedido creado!',
            })

        } catch (e) {
            console.log("ERRROR CREANDO:", e)
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

    async function getAddProcessing(req, res, next) {
        const { idReceive } = req.params

        let order
        try{
            
            order = await Receive.findById(idReceive)
        } catch (e) {
            //ERROR de la base de datos
            const err = new APIError('Algo salio mal, intentelo de nuevo mas tarde!', httpStatus.INTERNAL_SERVER_ERROR, true)
            return next(err)
        }
        if(!order){
            return next(new APIError('El pedido no ha sido encontrado!', httpStatus.NOT_FOUND, true))
        }

        order.state.push({ type: "processing" })
        try{
            await Receive.update(order)
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



    return {
        register,
        confirmation,
        getReceiveList,
        getProcessingList,
        getAddProcessing
    }

}