'use strict'

const express = require('express')
const auth = require('express-jwt')
const guard = require('express-jwt-permissions')()
const { validate } = require('express-validation')

const { saleController } = require('../controllers')()
const { saleValidation } = require('../validation')
const { TOKEN } = require('../../config/index')

const router = express.Router()

module.exports = async () => {

    const controller = await saleController()

    router
        .get('/', (req, res) => {
            res.send("hola mundo")
        })
        .post('/outstore', auth(TOKEN), guard.check(['client:true']), validate(saleValidation.outstore), controller.register) //registro de cliente

    return router
}