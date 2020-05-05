'use strict'

const {Joi} = require('express-validation')

module.exports = {
    signIn : { 
        body : Joi.object({  
           name: Joi.string().required(),
           lastName: Joi.string().required(),
           email: Joi.string().email().required(),
           password: Joi.string().required(),
        })
    }
}