'use strict'

const Mongoose = require('mongoose')
const setupDatabase = require('../lib/db')

module.exports = async function setupSaleModel (uri, config) {
  const mongoose = await setupDatabase(uri, config)
  const ordeModel = require('./order')

  const saleSchema = new Mongoose.Schema(ordeModel, { timestamps: true })

  return mongoose.model('Sale', saleSchema)
}
