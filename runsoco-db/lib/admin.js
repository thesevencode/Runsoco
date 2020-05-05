'use strict'

const Mongoose = require('mongoose')
const ObjectId = Mongoose.Types.ObjectId

module.exports = function (adminModel, UserModel) {
  async function create (admin) {
    const { name, password } = admin
    const user = await UserModel.create({ name, password })
    admin.user = user._id

    const result = await adminModel.create(admin)
    return result.toJSON()
  }

  function findById (_id) {
    if (!ObjectId.isValid(_id)) {
      return null
    }
    return adminModel.findById(_id).populate('user')
  }

  function findByEmail (email) {
    return adminModel.findOne({
      email: email
    }).populate('user')
  }

  function findByEmailSelectPassword (email) {
    return adminModel.findOne({
      email
    }).populate({ path: 'user', select: 'password' })
  }

  return {
    create, // implementado
    findById, // implementado
    findByEmail, // implementado
    findByEmailSelectPassword // implementado

  }
}
