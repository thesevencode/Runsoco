'use strict'

const jwt = require('jsonwebtoken')

function sign (payload, secret) {

    return jwt.sign(payload, secret, { expiresIn: '30d'})
}

function verify (token, secret, callback) {
    jwt.verify(token, secret, callback)
}

module.exports = {
    sign,
    verify
  }
  