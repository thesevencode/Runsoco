'use strict'

const authController = require('./auth.controller')
const clientController = require('./client.controller')
const adminController = require('./admin.controller')
const businessController = require('./business.controller')
const productController = require('./product.controller')
const saleController = require('./sale.controller')
const giftController = require('./gift.controller')


module.exports = () => {
    return {
        authController,
        clientController,
        adminController,
        businessController,
        productController,
        saleController,
        giftController
    }
}