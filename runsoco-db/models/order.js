 // password
 'use strict'
 const Mongoose = require('mongoose')


 module.exports = {

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
    select: true
  },
  state: [{
    type: {type: String, required: true},
    date: {type: Date, default: Date.now}
  }
  ],
  payment: {
    type: String,
    required: false,
    select: true
  },
  calificationCurrier: {
    type: Number,
    required: false
  },
  calificationBusiness: {
    type: Number,
    required: false
  },
  products: [{
    product: {
      type: Mongoose.Schema.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: {
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
    required: false
  },
  //= ===================================
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
  },
  type: {
    type: String,
    required: true,
    select: true
  }
}