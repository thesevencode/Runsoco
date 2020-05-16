'use strict'

const {Joi} = require('express-validation')

module.exports = {
    postSwap : { 
        body : Joi.object({  
           idGift: Joi.string().required()
        })
    }
}