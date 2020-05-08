'use strict'

const Mongoose = require('mongoose')
const setupDatabase = require('../lib/db')

module.exports = async function setupBusinessModel (uri, config) {
  const mongoose = await setupDatabase(uri, config)

  const locationModel = require('./location')

  const businessSchema = new Mongoose.Schema({
    // password
    name: {
      type: String,
      required: true
    },
    businessName: {
      type: String,
      required: true,
      lowercase: true
    },
    ruc: {
      type: Number,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    horary: [{
      day: {
        type: String,
        required: true
      },
      open: {
        type: Number,
        required: false
      },
      close: {
        type: Number,
        required: false
      }
    }],
    location: locationModel,
    type: [{
      type: String
    }],
    city: {
      type: String,
      required: true
    },
    district: {
      type: String,
      required: true,
      select: false
    },
    province: {
      type: String,
      required: true,
      select: false
    },
    department: {
      type: String,
      required: true,
      select: false
    },
    phones: [{
      type: String
    }],
    categories: [{
      description: {
        type: String,
        required: true
      },
      img: {
        type: String,
        required: false
      }
    }]

  }, { timestamps: true })

  return mongoose.model('Business', businessSchema)
}
