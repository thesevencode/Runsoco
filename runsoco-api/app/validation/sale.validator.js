'use strict'

const {Joi} = require('express-validation')

module.exports = {
    outstore : { 
        body : Joi.object({  
           client: Joi.string().required(),
           description: Joi.string().required(),
           category: Joi.string().required(),
           store: Joi.string().required(),
           cellphone: Joi.number().required(),
           priceDelivery:  Joi.number().required(),
           type: Joi.string().required()
        })
    }
}