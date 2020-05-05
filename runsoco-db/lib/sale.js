'use strict'

const Mongoose = require('mongoose')
const ObjectId = Mongoose.Types.ObjectId

module.exports = function (saleModel) {
  async function create (sale) {
    const result = await saleModel.create(sale)
    return result.toJSON()
  }

  async function update (sale) {
    if (!ObjectId.isValid(_id)) {
      return null
    }
    const cond = {
      _id: sale._id
    }
    const updated = await saleModel.updateOne(
      cond,
      { $set: sale }
    )
    return saleModel.findOne(cond)
  }

  function findById (_id) {
    if (!ObjectId.isValid(_id)) {
      return null
    }
    return saleModel.findById(_id)
  }

  return {
    create, // implementado
    update,
    findById // implementado
  }
}
