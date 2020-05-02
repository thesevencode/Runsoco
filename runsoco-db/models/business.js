'use strict'

const Mongoose = require('mongoose')
const setupDatabase = require('../lib/db')

module.exports = async function setupBusinessModel (uri, config) {
  const mongoose = await setupDatabase(uri, config)

  const locationSchema = require('./location')

  const businessSchema = new Mongoose.Schema({
    // password
    name: {
      type: String,
      required: true,
      select: true
    },
    businessName: {
      type: String,
      required: true,
      select: false
    },
    ruc: {
      type: String,
      required: true,
      select: false,
      lowercase: true
    },
    address: {
      type: String,
      required: true,
      select: true
    },
    horary: {
      open: {
        type: Number,
        required: true,
        select: true
      },
      close: {
        type: Number,
        required: true,
        select: true
      }
    },
    location: locationSchema,
    type: [{
      type: String
    }]

  }, { timestamps: true })

  return mongoose.model('Business', businessSchema)
}
