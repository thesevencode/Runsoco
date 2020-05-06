'use strict'

const bcrypt = require('bcryptjs')
const httpStatus = require('http-status')
const APIError = require('../helper/APIError');

const DB = require('../../db')

module.exports =  async ()=>{

    const { Admin } = await DB()


    async function signIn(req, res, next) {
        let body = req.body

        let user

        try {
            user = await Admin.findByEmail(body.email)
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
        try {
            await Admin.create(body)
            
            res.status(200).json({
                status: true,
                message: 'Operacion exitosa!'
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