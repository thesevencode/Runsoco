'use strict'

const express = require('express')
const { validate } = require('express-validation')


const { authController } = require('../controllers')()
const { authValidation } = require('../validation')

const router = express.Router()

module.exports = async () => {

    const controller = await authController()

    router
        .get('/', (req, res) => {
            res.send("hola mundo")
        })
        .post('/login', validate(authValidation.login), controller.login)
        .post('/facebook', validate(authValidation.facebook), controller.loginByFacebook)

    return router
}