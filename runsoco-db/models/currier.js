'use strict'

const Mongoose = require('mongoose')
const setupDatabase = require('../lib/db')

module.exports = async function setupCurrierModel (uri, config) {
  const mongoose = await setupDatabase(uri, config)

  const currierSchema = new Mongoose.Schema({
    user: {
      type: Mongoose.Schema.ObjectId,
      ref: 'User',
      required: true
    },
    name: {
      type: String,
      required: true,
      select: true
    },
    lastName: {
      type: String,
      required: true,
      select: true
    },
    sexo: {
      type: String,
      required: true,
      select: true
    },
    age: {
      type: Number,
      required: true,
      select: true
    },
    dni: {
      type: Number,
      required: true,
      select: true
    },
    address: {
      type: String,
      required: true,
      lowercase: true,
      select: true
    },
    cellphone: {
      type: Number,
      required: true,
      unique: false,
      select: true
    },
    vehicle: {
      enrollment: {
        type: String,
        required: true,
        select: true
      },
      license: {
        type: String,
        required: true,
        select: true
      },
      type: {
        type: String,
        required: true,
        select: true
      },
      soat: {
        type: String,
        required: true,
        select: true
      }

    }
  }, { timestamps: true })

  return mongoose.model('Currier', currierSchema)
}
