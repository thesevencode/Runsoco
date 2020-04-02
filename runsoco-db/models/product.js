'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema
const setupDatabase = require('../lib/db')

module.exports = async function setupClientModel (uri, config) {
  const mongoose = await setupDatabase(uri, config)

  

  const productSchema = new Mongoose.Schema({
    //password
    _idBusiness: {  
        type: Schema.ObjectId,
        ref: 'business',
        required:true
    },
    name: String,
    descripcion: String,
    precio: Number,
    type: String,


  }, { timestamps: true })

  return mongoose.model('Client', productSchema)
}
