'use strict'

const authController = require('./auth.controller')

module.exports = () => {
    return {
        authController
    }
}