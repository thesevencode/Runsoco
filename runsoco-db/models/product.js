'use strict'

const Mongoose = require('mongoose')
const setupDatabase = require('../lib/db')

module.exports = async function setupProductModel (uri, config) {
  const mongoose = await setupDatabase(uri, config)

  const productSchema = new Mongoose.Schema({
    business: {
      type: Mongoose.Schema.ObjectId,
      ref: 'Business',
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    img: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      required: false
    }
  }, { timestamps: true })

  return mongoose.model('Product', productSchema)
}
