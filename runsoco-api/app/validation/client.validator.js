'use strict'

const {Joi} = require('express-validation')

module.exports = {
    signIn : { 
        body : Joi.object({  
           name: Joi.string().required(),
           email: Joi.string().email().required(),
           city: Joi.string().required(),
           password: Joi.string().required(),
           terms:  Joi.boolean().required()
        })
    }
}