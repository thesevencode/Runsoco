'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema
const setupDatabase = require('../lib/db')
//NO IMPLEMENTADO
module.exports = async function setupClientModel (uri, config) {
  const mongoose = await setupDatabase(uri, config)

  const productSchema = new Mongoose.Schema({
    name: { type: String },
    type: { type: String },
    costo: { type: Number },
    _idProducto,
    lugar,
    fecha
    // Oroducto o servicio

  }, { timestamps: true })

  return mongoose.model('Client', productSchema)
}
