'use strict'

// const Mongoose = require('mongoose')
// const Schema = Mongoose.Schema

const locationModel = {
  latitude: {
    type: Number,
    required: true,
    select: true
  },
  longitude: {
    type: Number,
    required: true,
    select: true
  },
  address: {
    type: String,
    required: true,
    select: true
  },
  description: {
    type: String,
    required: false,
    select: true
  }
}

module.exports = locationModel
