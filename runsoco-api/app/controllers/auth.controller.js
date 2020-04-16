'use strict'
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')

const DB = require('../../db')
const  Token = require('../../utils/token')


const { auth, keyToken } = require('../../config')

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
        if (!body.terms || body.terms == 'false') {
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
            data: user
        })

        


    }

    async function login(req, res, next) {
        let client =  req.body

        let account
        try{
            account =  await Client.findByEmailSelectPassword(client.email)

        } catch (e){
            res.status(500).json({
                status: false,
                message: 'Ocurrio un problema, intentelo de nuevo mas tarde :('
            })
    
            handleFatalError(e)
        }

        if(account){

            if(bcrypt.compareSync(client.password, account.user.password)) {
                const payload = account.toJSON()
                delete payload.user.password
                var token = Token.sign(payload, keyToken)
                return res.status(200).json({token, status:true, data: payload })
    
            } 


            return res.status(400).json({
                    status: false,
                    message: 'Los datos son invalidos'
            })
        

        } else {
            return res.status(401).json({
                status: false,
                message: 'La cuenta no se encuentra registrada'
            })
        }

        
        

    }

    return {
        signIn,
        login
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