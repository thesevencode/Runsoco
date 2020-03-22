'use strict'

const Mongoose = require('mongoose')
const ObjectId = Mongoose.Types.ObjectId

module.exports = function (clientModel, UserModel) {

  async function createOrUpdate (client) {
    const cond = {
      _id: client._id
    }
    const existingClient = await clientModel.findOne(cond)

    if (existingClient) {
      const updated = await clientModel.updateOne(
        cond,
        { $set: client }
      )

      return updated ? clientModel.findOne(cond) : existingClient
    }
    const { name, password } = client
    const user = await UserModel.create({name, password})
    client.user = user._id

    const result = await clientModel.create(client)
    return result.toJSON()
  }

  function findById (_id) {
    if (!ObjectId.isValid(_id)) {
      return null
    }
    return clientModel.findById(_id).populate('user')
  }

  function findByEmail (email) {
    return clientModel.findOne({
      email: email
    }).populate('user')
  }

  function findByCity (city) {
    return clientModel.find({
      city: city
    }).populate('user')
  }

  function findByEmailSelectPassword (email) {
    return clientModel.findOne({
      email
    }).populate({ path: 'user', select: 'password'})

  }

  return {
    createOrUpdate, // implementado
    findById, // implementado
    findByEmail, // implementado
    findByCity, // implementado
    findByEmailSelectPassword, // implementado

  }
}
