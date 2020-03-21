'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema
const setupDatabase = require('../lib/db')

module.exports = async function setupClientModel (uri, config) {
  const mongoose = await setupDatabase(uri, config)

  const locationSchema = new Schema({
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
  }, { timestamps: true, required: false, select: true })

  const clientSchema = new Mongoose.Schema({
    user: {
      type: Schema.ObjectId,
      ref: 'User',
      required:true
    },
    city: {
      type: String,
      required: true,
      select: true,
      lowercase: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
      select: true
    },
    location_history: [locationSchema],
    cellphone: {
      type: Number,
      required: true,
      unique: true,
      select: true
    }
  }, { timestamps: true })

  return mongoose.model('Client', clientSchema)
}
