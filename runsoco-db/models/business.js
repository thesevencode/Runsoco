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
      required: true,
      select: true
    },
    businessName: {
      type: String,
      required: true,
      select: false,
      lowercase: true
    },
    ruc: {
      type: Number,
      required: true,
      select: false
    },
    img: {
      type: String,
      required: true,
      select: true
    },
    address: {
      type: String,
      required: true,
      select: true
    },
    horary: [{
      day: { 
        type: String,
        required: true,
        select: true 
      },
      open: {
        type: Number,
        required: false,
        select: true
      },
      close: {
        type: Number,
        required: false,
        select: true
      }
    }],
    location: { locationModel },
    type: [{
      type: String
    }],
    city: {
      type: String,
      required: true,
      select: true
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
    department : {
      type: String,
      required: true,
      select: false
    },
    phones: [{
      type: String
    }]

  }, { timestamps: true, select: false })

  return mongoose.model('Business', businessSchema)
}
