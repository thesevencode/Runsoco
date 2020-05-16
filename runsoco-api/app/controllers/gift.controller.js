'use strict'

const httpStatus = require('http-status')

const APIError = require('../helper/APIError')
const ExpoPushNotification = require('../helper/ExpoPushNotification');


const socket = require('../../socket')()

const DB = require('../../db')

module.exports =  async ()=>{

    const { Gift } = await DB()

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

    return {
        getClient,
        register
    }

}