'use strict'

const express = require('express')

const { authController } = require('../controllers')()

const router = express.Router()

module.exports = async () => {

    const controller = await authController()

    router
        .get('/', (req, res) => {
            res.send("hola mundo")
        })
        .post('/signIn', controller.signIn)
        .post('/login', controller.login)

    return router
}