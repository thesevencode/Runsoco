'use strict'

const Mongoose = require('mongoose')
const setupDatabase = require('../lib/db')

module.exports = async function setupClientModel (uri, config) {
  const mongoose = await setupDatabase(uri, config)

  const clientSchema = new Mongoose.Schema({
    user: {
      type: Mongoose.Schema.ObjectId,
      ref: 'User',
      required: true
    },
    shareCode: {
      type: String,
      required: true,
      lowercase: true
    },
    tokenPush: {
      type: String,
      required: false
    },
    city: {
      type: String,
      required: true,
      lowercase: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    // location_history: [locationSchema],
    cellphone: {
      type: Number,
      required: false,
      unique: false,
    },
    points: { type: Number, required: true }
  }, { timestamps: true })

  return mongoose.model('Client', clientSchema)
}
