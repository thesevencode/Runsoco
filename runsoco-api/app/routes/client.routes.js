'use strict'

const express = require('express')
const { validate } = require('express-validation')

const { clientController } = require('../controllers')()

const { clientValidation } = require('../validation')

const router = express.Router()

module.exports = async () => {

    const controller = await clientController()

    router
        .get('/', (req, res) => {
            res.send("hola mundo")
        })
        .post('/signIn', validate(clientValidation.signIn), controller.signIn)//registro de cliente

    return router
}