'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema
const setupDatabase = require('../lib/db')

module.exports = async function setupClientModel (uri, config) {
  const mongoose = await setupDatabase(uri, config)

  

  const clientSchema = new Mongoose.Schema({
    //password
    name: String,
    address: String, 
    ruc: String,
    razonSocial: String,
    type: String


  }, { timestamps: true })

  return mongoose.model('Client', clientSchema)
}
