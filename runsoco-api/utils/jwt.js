'use strict'

const jwt = require('jsonwebtoken')

/*
    0 => CLIENTE
*/
function sign (payload, secret, type) {
    payload.permissions = createPermission(type)
    return jwt.sign(payload, secret, createExpiration(type))
}

function createPermission(type){
    //Creamos los permisos correspondientes
    var permissions = []
    switch(type){
        case 0:
            permissions.push("client:true")
            break
        case 1:
            permissions.push("admin:true")
            break
    }
  
    return permissions;
}

function createExpiration(type){
    //Creamos los permisos correspondientes
    let result
    switch(type){
        case 0:
            result = null
            break
        case 1:
            result = {
                expiresIn: '2d'
            }
            break
    }
  
    return result;
}

function verify (token, secret, callback) {
    jwt.verify(token, secret, callback)
}

module.exports = {
    sign,
    verify
  }
  