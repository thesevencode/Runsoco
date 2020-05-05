'use strict'

const Mongoose = require('mongoose')
const ObjectId = Mongoose.Types.ObjectId

module.exports = function (productModel) {

  async function create (product) {
    const result = await productModel.create(product)
    return result.toJSON()
  }

  async function update (product) {
    if (!ObjectId.isValid(_id)) {
      return null
    }
    const cond = {
      _id: product._id
    }
    const updated = await productModel.updateOne(
      cond,
      { $set: product }
    )
    return productModel.findOne(cond) 
  }

  function findById (_id) {
    if (!ObjectId.isValid(_id)) {
      return null
    }
    return productModel.findById(_id)
  }

  function findByIdBusiness(_idBusiness){
    if (!ObjectId.isValid(_idBusiness)) {
      return null
    }
    const cond = {
        business: _idBusiness
    }

    return productModel.find(cond)
  }

  return {
    create, // implementado
    update, // implementado
    findById, // implementado
    findByIdBusiness //implementado
  }
}
