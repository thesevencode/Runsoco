'use strict'

const Mongoose = require('mongoose')
const setupDatabase = require('../lib/db')

module.exports = async function setupAdminModel (uri, config) {
  const mongoose = await setupDatabase(uri, config)

  const adminSchema = new Mongoose.Schema({
    user: {
      type: Mongoose.Schema.ObjectId,
      ref: 'User',
      required: true
    },
    lastName: {
      type: String,
      required: true,
      select: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
      select: true
    },
    cellphone: {
      type: Number,
      required: false,
      unique: false,
      select: true
    }
  }, { timestamps: true })

  return mongoose.model('Admin', adminSchema)
}
