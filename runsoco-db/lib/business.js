'use strict'

const Mongoose = require('mongoose')
const ObjectId = Mongoose.Types.ObjectId

module.exports = function (businessModel) {

  async function create (business) {
    const result = await businessModel.create(business)
    return result.toJSON()
  }

  async function update (business) {
    if (!ObjectId.isValid(_id)) {
      return null
    }
    const cond = {
      _id: business._id
    }
    const updated = await businessModel.updateOne(
      cond,
      { $set: business }
    )
    return businessModel.findOne(cond) 
  }

  function findById (_id) {
    if (!ObjectId.isValid(_id)) {
      return null
    }
    return businessModel.findById(_id)
  }

  function findByType(type){
    const cond = {
        type: { $in: type } //Options: $all, $nin, $in
    }

    return businessModel.find(cond)
  }

  return {
    create, // implementado
    update, // implementado
    findById, // implementado
    findByType //implementado
  }
}
