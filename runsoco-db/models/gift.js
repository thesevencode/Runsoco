'use strict'

const Mongoose = require('mongoose')
const setupDatabase = require('../lib/db')

module.exports = async function setupUserModel (uri, config) {
  const mongoose = await setupDatabase(uri, config)

  const giftSchema = new Mongoose.Schema({
    business: {
        type: Mongoose.Schema.ObjectId,
        ref: 'Business'
    },
    points: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    awarded: [{
        client: {
            type: Mongoose.Schema.ObjectId,
            ref: 'Client'
        },
        cellphone: {
            type: String
        },
        address: {
            type: String
        },
        code: {
            type: String,
            required: true
        }
    }]
  })

  return mongoose.model('Gift', giftSchema)
}
