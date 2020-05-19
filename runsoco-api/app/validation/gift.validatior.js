'use strict'

const {Joi} = require('express-validation')

module.exports = {
    postSwap : { 
        body : Joi.object({  
           idGift: Joi.string().required(),
           cellphone: Joi.number().required(),
           address: Joi.string().required()
        })
    }
}