'use strict'

const jwt = require('jsonwebtoken')

function sign (payload, secret) {

    return jwt.sign(payload, secret)
}

function verify (token, secret, callback) {
    jwt.verify(token, secret, callback)
}

module.exports = {
    sign,
    verify
  }
  