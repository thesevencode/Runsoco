'use strict'

const express = require('express')
const auth = require('express-jwt')
const guard = require('express-jwt-permissions')()
const { validate } = require('express-validation')

const { clientController } = require('../controllers')()
const { clientValidation } = require('../validation')
const { TOKEN } = require('../../config/index')

const router = express.Router()

module.exports = async () => {

    const controller = await clientController()

    router
        .get('/', (req, res) => {
            res.send("hola mundo")
        })
        .post('/signIn', validate(clientValidation.signIn), controller.signIn)//registro de cliente
        .post('/notification', auth(TOKEN), guard.check(['client:true']), validate(clientValidation.notification), controller.update)//registro de token


    return router
}