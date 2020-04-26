'use strict'

const {Joi} = require('express-validation')

module.exports = {
    login : { 
        body : Joi.object({  
           email: Joi.string().email().required(),
           password: Joi.string().required()
        })
    },
    facebook: {
        body : Joi.object({  
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            city: Joi.string().required(),
            password: Joi.string().required(),
            terms:  Joi.boolean().required()
        })
    }
}