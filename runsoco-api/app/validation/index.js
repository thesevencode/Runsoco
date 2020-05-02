'use strict' 
const clientValidation = require('./client.validator')
const authValidation =  require('./auth.validator')
const saleValidation = require('./sale.validator')

module.exports = {
    clientValidation,
    authValidation,
    saleValidation
}