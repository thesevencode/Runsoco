'use strict'

const Mongoose = require('mongoose')
const setupDatabase = require('../lib/db')

module.exports = async function setupSaleModel (uri, config) {
  const mongoose = await setupDatabase(uri, config)
  const ordeModel = require('./order')

  const receiveSchema = new Mongoose.Schema(ordeModel)

  return mongoose.model('Receive', receiveSchema)
}
