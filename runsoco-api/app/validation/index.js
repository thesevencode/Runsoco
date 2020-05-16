'use strict' 
const clientValidation = require('./client.validator')
const adminValidation = require('./admin.validator')
const authValidation =  require('./auth.validator')
const saleValidation = require('./sale.validator')
const giftValidation = require('./gift.validatior')


module.exports = {
    clientValidation,
    adminValidation,
    authValidation,
    saleValidation,
    giftValidation
}