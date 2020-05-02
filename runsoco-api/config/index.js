'use strict'

const db = require('./db')
const auth = require('./auth')

module.exports = {
    db,
    auth,
    TOKEN: {
        secret: process.env.SECRET_TOKEN || 'bytecodePuerto2019'
    }
}