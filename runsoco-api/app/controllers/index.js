'use strict'

const authController = require('./auth.controller')
const clientController = require('./client.controller')

module.exports = () => {
    return {
        authController,
        clientController
    }
}