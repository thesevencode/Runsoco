'use strict'

const express = require('express')
const auth = require('express-jwt')

const { validate } = require('express-validation')

const { TOKEN } = require('../../config/index')
const { authController } = require('../controllers')()
const { authValidation } = require('../validation')

const router = express.Router()

module.exports = async () => {

    const controller = await authController()

    router
        .get('/', (req, res) => {
            res.send("hola mundo")
        })
        .get('/logout', auth(TOKEN), controller.logout)
        .post('/login', validate(authValidation.login), controller.login)
        .post('/facebook', validate(authValidation.facebook), controller.loginByFacebook)
        .post('/login/admin', validate(authValidation.login), controller.loginAdmin)


    return router
}