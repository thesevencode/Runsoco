'use strict'

const express = require('express')
const { validate } = require('express-validation')

const { adminController } = require('../controllers')()

const { adminValidation } = require('../validation')

const router = express.Router()

module.exports = async () => {

    const controller = await adminController()

    router
        .get('/', (req, res) => {
            res.send("hola mundo")
        })
        .post('/signIn', validate(adminValidation.signIn), controller.signIn)//registro del administrador

    return router
}