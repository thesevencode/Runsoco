'use strict'

const bcrypt = require('bcryptjs')
const httpStatus = require('http-status')
const APIError = require('../helper/APIError');


const DB = require('../../db')
const { TokenUtils, HashidsUtils } =  require('../../utils')
const { TOKEN } = require('../../config')


module.exports =  async ()=>{

    const { Client } = await DB()


    async function signIn(req, res, next) {
        let body = req.body

        if (body.terms == 'false') {
            //errror de terminos
            return next(new APIError('Acepta los terminos y condiciones para poder continuar!', httpStatus.BAD_REQUEST, true))
        }
        
        let user

        try {
            user = await Client.findByEmail(body.email)
        } catch (e) {
            console.log("ERROR FIND:", e)
            //Error de la base de datos
            const err = new APIError('Algo salio mal, intentlo de nuevo mas tarde!', httpStatus.INTERNAL_SERVER_ERROR, true)
            return next(err)
        }

        if(user){
            //error de cuenta
            return next(new APIError('El email que desea utilizar ya existe, por favor intente con uno diferente!', httpStatus.BAD_REQUEST, true))
        }

        //encriptamos la contraseña
        body.password = bcrypt.hashSync(body.password, 10)
        body.points = 10//generando puntos
        const generator = new HashidsUtils(body.email)
        body.shareCode = generator.generate()

        try {
            user = await Client.createOrUpdate(body)
            delete user.password

            var token = TokenUtils.sign({_id: user._id, email: user.email}, TOKEN.secret, 0)
            res.status(200).json({
                status: true,
                message: 'Operacion exitosa, usuario creado!',
                data: user,
                token
            })
        } catch (e) {
            console.log("ERROR CREANDO:", e)

            //ERROR de la base de datos
            const err = new APIError('Algo salio mal, intentlo de nuevo mas tarde!', httpStatus.INTERNAL_SERVER_ERROR, true)
            return next(err)
        }

    
    }

    async function update(req, res, next) {
        let body = req.body
        body._id = req.user._id
        try {
             await Client.createOrUpdate(body)

            res.status(200).json({
                status: true,
                message: 'Operacion exitosa, datos actualizados!',
            })
        } catch (e) {
            //ERROR de la base de datos
            const err = new APIError('Algo salio mal, intentlo de nuevo mas tarde!', httpStatus.INTERNAL_SERVER_ERROR, true)
            return next(err)
        }

    
    }

    async function getProfile(req, res, next){
        await getCLient(req, next, function(client){
            res.status(200).json({
                status: true,
                message: 'Operacion exitosa, datos actualizados!',
                data: client
            })
        })
    }

    async function getPoints(req, res, next){
        await getCLient(req, next, function(client){
            res.status(200).json({
                status: true,
                message: 'Operacion exitosa, datos actualizados!',
                data: client.points
            })
        })
    }

    async function getCLient(req, next, callback){
        const { _id } = req.user
        let client
        try{
            client = await Client.findById(_id)
        }catch(e){
            const err = new APIError('Algo salio mal, intentlo de nuevo mas tarde!', httpStatus.INTERNAL_SERVER_ERROR, true)
            return next(err)
        }

        if(!client){
            return next(new APIError('Cliente no encontrado!', httpStatus.NOT_FOUND, true))
        }
        callback(client)
        
    }
    return {
        signIn,
        update,
        getProfile,
        getPoints
    }

}