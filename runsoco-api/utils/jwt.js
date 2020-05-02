'use strict'

const jwt = require('jsonwebtoken')

/*
    0 => CLIENTE
*/
function sign (payload, secret, type) {
    payload.permissions = createPermission(type)
    return jwt.sign(payload, secret)
}

function createPermission(type){
    //Creamos los permisos correspondientes
    var permissions = []
    switch(type){
        case 0:
            permissions.push("client:true")
            break
    }
  
    return permissions;
  }

function verify (token, secret, callback) {
    jwt.verify(token, secret, callback)
}

module.exports = {
    sign,
    verify
  }
  