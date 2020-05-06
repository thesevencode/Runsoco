'use strict'

const {Joi} = require('express-validation')

module.exports = {
    outstore : { 
        body : Joi.object({  
           client: Joi.string().required(),
           description: Joi.string().required(),
           category: Joi.string().required(),
           payment: Joi.string().required(),
           store: Joi.string().required(),
           cellphone: Joi.number().required(),
           priceDelivery:  Joi.number().required(),
           extraDelivery:  Joi.number(),
           type: Joi.string().required()
        })
    },
    instore : { 
        body : Joi.object({  
           client: Joi.string().required(),
           business: Joi.string().required(),
           address: Joi.string().required(),
           payment: Joi.string().required(),
           products: Joi.array().items({
               product: Joi.string().required(),
               quantity: Joi.number().required(),
               subtotal: Joi.number().required()
           }),
           category: Joi.string().required(),
           cellphone: Joi.number().required(),
           total:  Joi.number().required(),
           priceDelivery:  Joi.number().required(),
           type: Joi.string().required()
        })
    }
}

