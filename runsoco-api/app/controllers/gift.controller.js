'use strict'

const httpStatus = require('http-status')

const APIError = require('../helper/APIError')
const ExpoPushNotification = require('../helper/ExpoPushNotification');
//UTILS CONTROLLER
const utils = require('../utils/index')()
//UTILS 
const { HashidsUtils } =  require('../../utils')

const socket = require('../../socket')()

const DB = require('../../db')

module.exports =  async ()=>{

    const { Gift, Client } = await DB()

    async function getClient(req, res, next){
        let data
        try{
            data = await Gift.findForClient()
        }catch(e){
            //ERROR de la base de datos
            const err = new APIError('Algo salio mal, intentelo de nuevo mas tarde!', httpStatus.INTERNAL_SERVER_ERROR, true)
            return next(err)
        }

        res.status(200).json({
            status: true,
            message: 'Operacion exitosa!',
            data
        })
    }

    async function register(req, res, next){
        const body = req.body

        let gift
        try{
        
            gift = await Gift.createOrUpdate(body)
            //Emitir notificación al cliente


            res.status(200).json({
                status: true,
                message: 'Operacion exitosa, Regalo creado!'
            })

        } catch (e) {
            //ERROR de la base de datos
            const err = new APIError('Algo salio mal, intentelo de nuevo mas tarde!', httpStatus.INTERNAL_SERVER_ERROR, true)
            return next(err)
        }
    }

    async function postSwap(req, res, next){
        //Buscamos el regalo
        const { idGift, cellphone, address } = req.body
        let gift =  await utils.findById(Gift, idGift, next)
        //Verificamos si aun esta disponible
        if(gift.quantity == 0){
            return next(new APIError('Regalo no disponible!', httpStatus.NOT_FOUND, true))
        }
        //Obtenemos los puntos del cliente
        const { _id } = req.user
        let client = await utils.findById(Client, _id , next)
        //Verificamos si el cliente tienes los puntos necesarios
        if(client.points < gift.points)  return next(new APIError('Puntos insuficientes!', httpStatus.UNAUTHORIZED, true))
        //Genaramos codigo de canjeo
        let key = (new Date()).toString()
        const code = new HashidsUtils(key).generate()

        //Actualizamos los puntos del cliente
        try{
            client.points = client.points - gift.points
            await Client.createOrUpdate(client)
        }catch(e){
            const err = new APIError('Algo salio mal, intentelo de nuevo mas tarde!', httpStatus.INTERNAL_SERVER_ERROR, true)
            return next(err)
        }
        
        //Registramos premio
        try{
            gift.quantity = gift.quantity - 1
            gift.awarded.push({client : client._id, code, cellphone, address})
            await Gift.createOrUpdate(gift)
        }catch(e){
            const err = new APIError('Algo salio mal, intentelo de nuevo mas tarde!', httpStatus.INTERNAL_SERVER_ERROR, true)
            return next(err)        
        }

        res.status(200).json({
            status: true,
            message: 'Operacion exitosa, Su regalo ha sido canjeado!',
            code
        })


    }

    return {
        getClient,
        register,
        postSwap
    }

}