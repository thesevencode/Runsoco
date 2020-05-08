'use strict'

const Mongoose = require('mongoose')
const ObjectId = Mongoose.Types.ObjectId

module.exports = function (saleModel) {
  async function create (sale) {
    const result = await saleModel.create(sale)
    return findByIdForAdmin(result.toJSON()._id)
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

  function findByIdForAdmin (_id) {
    if (!ObjectId.isValid(_id)) {
      return null
    }
    return saleModel.findById(_id)
            .populate({
              path: 'client',
              select: 'email city',
              populate: { path: 'user' }
            })
            .populate('business', ['name', 'address', 'phones', 'type'])
            .populate('products.product', ['name', 'description','price', 'category'])
  }

  return {
    create, // implementado
    update,
    findById, // implementado

    //ADMINISTRADOR
    findByIdForAdmin
  }
}
