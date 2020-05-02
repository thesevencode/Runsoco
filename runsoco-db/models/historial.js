'use strict'

const Mongoose = require('mongoose')
const setupDatabase = require('../lib/db')
//NO IMPLEMENTADO
module.exports = async function setupClientModel (uri, config) {
  const mongoose = await setupDatabase(uri, config)

  const productSchema = new Mongoose.Schema({
    // password
    _idClient,
    _idProducto

  }, { timestamps: true })

  return mongoose.model('Client', productSchema)
}
