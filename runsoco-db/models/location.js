'use strict'

// const Mongoose = require('mongoose')
// const Schema = Mongoose.Schema

const locationModel = {
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  }
}

module.exports = locationModel
