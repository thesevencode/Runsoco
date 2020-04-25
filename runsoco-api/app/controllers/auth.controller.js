'use strict'
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')

const DB = require('../../db')
const  {HandleFatalError, Token} = require('../../utils')
const { auth, keyToken } = require('../../config')


let transporter = nodemailer.createTransport(auth.GoogleAuth);

module.exports = async () => {
    const { Client } = await DB()

   

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
    
            HandleFatalError(e)
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
        login
    }

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