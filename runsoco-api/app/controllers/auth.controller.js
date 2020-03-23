'use strict'
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')

const DB = require('../../db')

const { auth } = require('../../config')

let transporter = nodemailer.createTransport(auth.GoogleAuth);

module.exports = async () => {
    const { Client } = await DB()

    async function signIn(req, res, next) {

        let body = req.body

        let user

        try {
            user = await Client.findByEmail(body.email)
        } catch (e) {
            handleFatalError(e)
        }

        if (user) {
            return res.status(400).json({
                status: false,
                message: 'El email que desea utilizar ya existe, por favor intente con uno diferente'
            })
        }
        if (!body.password || body.password == '') {
            return res.status(400).json({
                status: false,
                message: 'La contraseña es un campo obligatorio, por favor intentalo nuevamente'
            })
        }
        if (!body.user.terms) {
            return res.status(400).json({
                status: false,
                message: 'Acepta los terminos y condiciones para poder continuar'
            })
        }

        body.password = bcrypt.hashSync(body.password, 10)

        try {
            user = await Client.createOrUpdate(body)
        } catch (e) {
            handleFatalError(e)
        }

        if (!user) {
            return res.status(500).json({
                status: false,
                message: 'Algo salio mal, vuelve a intentarlo'
            })
        }

        delete user.password

        res.status(200).json({
            status: true,
            message: 'Operacion exitosa, usuario creado',
            user: user
        })

        


    }

}


function handleFatalError(err) {
    console.log('ERRORR')
    console.error(err.message)
    console.error(err.stack)
    process.exit(1)
}

function sendEmail(data) {

    readHTMLFile(data.template, function(err, html) {
        var template = handlebars.compile(html);
        var replacements = {
            uri: data.uri + data.token
        }

        var htmlToSend = template(replacements);
        var mailOptions = {
            from: 'bytecodesac@gmail.com', // sender address
            to: data.email, // list of receivers
            subject: "BYTECODE: Recuperacion de cuenta", // Subject line
            html: htmlToSend // html body
        }

        transporter.sendMail(mailOptions, function(error, response) {
            if (error) {
                console.log(error);
                callback(error);
            }
        })
    })
    // readHTMLFile('app/template/email.html', function(err, html) {
    //     var template = handlebars.compile(html);
    //     var replacements = {
    //         uri: 'http://localhost:4200/#/activate/' + token
    //     }

    //     var htmlToSend = template(replacements);
    //     var mailOptions = {
    //         from: 'manumayo8@gmail.com', // sender address
    //         to: user.email, // list of receivers
    //         subject: "Mensaje de verificacion", // Subject line
    //         html: htmlToSend // html body
    //     }

    //     transporter.sendMail(mailOptions, function(error, response) {
    //         if (error) {
    //             console.log(error);
    //             callback(error);
    //         }
    //     })
    // })

}