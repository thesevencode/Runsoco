'use strict'

const Mongoose = require('mongoose')
const setupDatabase = require('../lib/db')

module.exports = async function setupSaleModel (uri, config) {
  const mongoose = await setupDatabase(uri, config)

  const saleSchema = new Mongoose.Schema({
    // password
    client: {
      type: Mongoose.Schema.ObjectId,
      ref: 'Client',
      required: true
    },
    currier: {
      type: Mongoose.Schema.ObjectId,
      ref: 'Currier',
      required: false
    },
    business: {
      type: Mongoose.Schema.ObjectId,
      ref: 'Business',
      required: false
    },

    total: {
      type: Number,
      required: false,
      select: true
    },
    address: {
      type: String,
      required: false,
      select: true,
    },
    state: [{
        type: String,
        hour: Date
      }
    ],
    payment: {
        type: String,
        required: false,
        select: true
    },
    calificationCurrier: {
      type: Number,
      required: false,
      select: true
    },
    calificationBusiness: {
      type: Number,
      required: false,
      select: true
    },
    products: [{
      product: {
        type: Mongoose.Schema.ObjectId,
        ref: 'Product',
        required: true
      },
      quantity:{
        type: Number,
        required: true,
        select: true
      },
      subtotal: {
        type: Number,
        required: true,
        select: true
      }
    }],
    priceDelivery: {
      type: Number,
      required: true,
      select: true
    },
    extraDelivery: {
      type: Number,
      required: false,
      select: false
    },
    //====================================
    category: {
      type: String,
      required: false,
      select: true
    },
    description: {
      type: String,
      required: false,
      select: true
    },
    cellphone: {
      type: Number,
      required: false,
      select: true
    },
    store: {
      type: String,
      required: false,
      select: true
    }
  }, { timestamps: true })

  return mongoose.model('Sale', saleSchema)
}
