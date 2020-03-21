'use strict'

const Mongoose = require('mongoose')
const ObjectId = Mongoose.Types.ObjectId

module.exports = function (userModel) {
  async function createOrUpdate (user) {
    const cond = {
      _id: user._id
    }
    const existingUser = await userModel.findOne(cond)

    if (existingUser) {
      const updated = await userModel.updateOne(
        cond,
        { $set: user }
      )

      return updated ? userModel.findOne(cond) : existingUser
    }

    const result = await userModel.create(user)
    return result.toJSON()
  }

  function findById (_id) {
    if (!ObjectId.isValid(_id)) {
      return null
    }
    return userModel.findById(_id)
  }

  return {
    createOrUpdate, // implementado
    findById // implementado
  }
}
