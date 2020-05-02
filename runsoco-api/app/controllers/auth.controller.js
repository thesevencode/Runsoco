'use strict'
const blacklist = require('express-jwt-blacklist')
const bcrypt = require('bcryptjs')
const httpStatus = require('http-status')
const APIError = require('../helper/APIError')

const DB = require('../../db')
const  { TokenUtils, HashidsUtils } = require('../../utils')
const {TOKEN} = require('../../config')

module.exports = async () => {
    //Iniciamos la base de datos y recuperamo el modelo
    const { Client } = await DB()


    async function login(req, res, next) {
        let client =  req.body

        let account
        try{
            //buscamos cuenta por email
            account =  await Client.findByEmailSelectPassword(client.email)

        } catch (e){
            //ERROR de la base de datos
            const err = new APIError('Algo salio mal, intentlo de nuevo mas tarde!', httpStatus.INTERNAL_SERVER_ERROR, true)
            return next(err)
    
        }

        //verificamos si encontramos un usuario
        if(account){
            //comparar contraseñas
            if(bcrypt.compareSync(client.password, account.user.password)) {

                const payload = account.toJSON()
                delete payload.user.password
                var token = TokenUtils.sign(payload, TOKEN.secret, 0)

                return res.status(200).json({
                    token, 
                    status:true, 
                    data: payload,
                    message: 'Inicio de sesión exitoso!' 
                })
            } 

            return next(new APIError('Las credenciales son incorrectas!', httpStatus.BAD_REQUEST, true))

        } 


        //Error de que la cuenta no existe
        return next(new APIError('La cuenta no se encuentra registrada!', httpStatus.NOT_FOUND , true))
        
    }

    async function loginByFacebook(req, res, next){
        let client  = req.body

        //Iniciamos sesión y verificamos si existe la cuenta
        try{
            await login(req, res,async (err) => {
                if(err.status == 404){

                    if (client.terms == 'false') {
                        //errror de terminos
                        return next(new APIError('Acepta los terminos y condiciones para poder continuar!', httpStatus.BAD_REQUEST, true))
                    }

                    client.password = bcrypt.hashSync(client.password, 10)
                    const generator = new HashidsUtils(client.email)
                    client.shareCode = generator.generate()

                    let result = await Client.createOrUpdate(client)        
                    var token = TokenUtils.sign(result.toJSON(), TOKEN.secret, 0)
                    
                    return res.status(200).json({
                        status: true,
                        message: 'Operacion exitosa, usuario creado!',
                        data: result,
                        token
                    })

                }
                return next(err)
            })

        } catch (e){
            //ERROR de la base de datos
            const err = new APIError('Algo salio mal, intentlo de nuevo mas tarde!', httpStatus.INTERNAL_SERVER_ERROR, true)
            return next(err)    
        }
        
    }

    async function logout(req, res, next) {
        blacklist.revoke(req.user);
        res.status(200).json({
            status: true,
            message: 'la sesión ha sido cerrada exitosamente!',
        })
    }

    return {
        login,
        loginByFacebook,
        logout
    }

}


// let transporter = nodemailer.createTransport(auth.GoogleAuth);


// function sendEmail(data) {

//     readHTMLFile(data.template, function(err, html) {
//         var template = handlebars.compile(html);
//         var replacements = {
//             uri: data.uri + data.token
//         }

//         var htmlToSend = template(replacements);
//         var mailOptions = {
//             from: 'bytecodesac@gmail.com', // sender address
//             to: data.email, // list of receivers
//             subject: "BYTECODE: Recuperacion de cuenta", // Subject line
//             html: htmlToSend // html body
//         }

//         transporter.sendMail(mailOptions, function(error, response) {
//             if (error) {
//                 console.log(error);
//                 callback(error);
//             }
//         })
//     })
//     // readHTMLFile('app/template/email.html', function(err, html) {
//     //     var template = handlebars.compile(html);
//     //     var replacements = {
//     //         uri: 'http://localhost:4200/#/activate/' + token
//     //     }

//     //     var htmlToSend = template(replacements);
//     //     var mailOptions = {
//     //         from: 'manumayo8@gmail.com', // sender address
//     //         to: user.email, // list of receivers
//     //         subject: "Mensaje de verificacion", // Subject line
//     //         html: htmlToSend // html body
//     //     }

//     //     transporter.sendMail(mailOptions, function(error, response) {
//     //         if (error) {
//     //             console.log(error);
//     //             callback(error);
//     //         }
//     //     })
//     // })

// }