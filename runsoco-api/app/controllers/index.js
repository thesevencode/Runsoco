'use strict'

const authController = require('./auth.controller')
const clientController = require('./client.controller')
const businessController = require('./business.controller')
const saleController = require('./sale.controller')

module.exports = () => {
    return {
        authController,
        clientController,
        businessController,
        saleController
    }
}