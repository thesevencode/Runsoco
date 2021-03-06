'use strict'

const {Joi} = require('express-validation')

module.exports = {
    outstore : { 
        body : Joi.object({  
        //    client: Joi.string(),
           description: Joi.string().required(),
           address: Joi.string().required(),
           payment: Joi.string().required(),
           store: Joi.string().required(),
           cellphone: Joi.number().required(),
           priceDelivery:  Joi.number().required(),
           extraDelivery:  Joi.number(),
           type: Joi.string().required()
        })
    },
    postReceive : { 
        body : Joi.object({  
           sale: Joi.string().required()
        })
    },
    postAccept : { 
        body : Joi.object({  
            idSale: Joi.string().required(),
            idClient: Joi.string().required()
        })
    },
    instore : { 
        body : Joi.object({  
           client: Joi.string(),
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

