'use strict'

const express = require('express')
const auth = require('express-jwt')
const guard = require('express-jwt-permissions')()
const { validate } = require('express-validation')

const { giftController } = require('../controllers')()
const { giftValidation } = require('../validation')
const { TOKEN } = require('../../config/index')

const router = express.Router()

module.exports = async () => {

    const controller = await giftController()

    router
        .get('', auth(TOKEN), guard.check(['client:true']), controller.getClient)
        .post('/register', auth(TOKEN), guard.check(['admin:true']), controller.register)


    return router
}