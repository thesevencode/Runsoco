'use strict'

const express = require('express')
const { validate } = require('express-validation')

const { saleController } = require('../controllers')()
const { clientValidation } = require('../validation')

const router = express.Router()

module.exports = async () => {

    const controller = await saleController()

    router
        .get('/', (req, res) => {
            res.send("hola mundo")
        })
        .post('/signIn', controller.register)//registro de cliente

    return router
}