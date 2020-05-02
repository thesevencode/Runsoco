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
        const generator = new HashidsUtils(body.email)
        body.shareCode = generator.generate()

        try {
            user = await Client.createOrUpdate(body)
            delete user.password

            var token = TokenUtils.sign(user.toJSON(), TOKEN.secret, 0)
            res.status(200).json({
                status: true,
                message: 'Operacion exitosa, usuario creado!',
                data: user,
                token
            })
        } catch (e) {
            //ERROR de la base de datos
            const err = new APIError('Algo salio mal, intentlo de nuevo mas tarde!', httpStatus.INTERNAL_SERVER_ERROR, true)
            return next(err)
        }

    
    }


    return {
        signIn
    }

}