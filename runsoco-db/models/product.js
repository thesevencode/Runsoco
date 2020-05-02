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
      required: true,
      select: true
    },
    description: {
      type: String,
      required: true,
      select: true
    },
    img: {
      type: String,
      select: true
    },
    price: {
      type: Number,
      required: true,
      select: true
    },
    category: {
      type: String,
      select: true
    }
  }, { timestamps: true })

  return mongoose.model('Product', productSchema)
}
