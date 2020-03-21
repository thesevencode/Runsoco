'use strict'

const Mongoose = require('mongoose')
const setupDatabase = require('../lib/db')

module.exports = async function setupUserModel (uri, config) {
  const mongoose = await setupDatabase(uri, config)

  const userSchema = new Mongoose.Schema({
    name: {
      type: String,
      required: true,
      select: true
    },
    password: {
      type: String,
      required: true,
      select: false,
      trim: true
    }
  })

  return mongoose.model('User', userSchema)
}
