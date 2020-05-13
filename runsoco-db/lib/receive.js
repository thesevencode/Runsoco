'use strict'

const Mongoose = require('mongoose')
const ObjectId = Mongoose.Types.ObjectId

module.exports = function (receiveModel) {
    
  async function create (order) {
    const result = await receiveModel.create(order)
    return findByIdForAdmin(result.toJSON()._id)
  }

  async function update (order) {
    const cond = {
      _id: order._id
    }
    
    await receiveModel.updateOne(
      cond,
      { $set: order }
    )
    return receiveModel.findOne(cond)
  }

  function findById (_id) {
    if (!ObjectId.isValid(_id)) {
      return null
    }
    return receiveModel.findById(_id)
            .populate({
              path: 'client',
              select: 'tokenPush points',
              populate: { path: 'user' }
            })
    
  }


  function findByIdForAdmin (_id) {
    if (!ObjectId.isValid(_id)) {
      return null
    }
    return receiveModel.findById(_id)
            .populate({
              path: 'client',
              select: 'email city tokenPush',
              populate: { path: 'user' }
            })
            .populate('business', ['name', 'address', 'phones', 'type'])
            .populate('products.product', ['name', 'description','price', 'category'])
  }

  function findByEstadoReceive () {
    const cond = {
      'state.type': { $nin: 'processing completed' }  // Options: $all, $nin, $in
    }
    return receiveModel.find(cond)
            .populate({
              path: 'client',
              select: 'email city',
              populate: { path: 'user' }
            })
            .populate('business', ['name', 'address', 'phones', 'type'])
            .populate('products.product', ['name', 'description','price', 'category'])
  }

  function findByEstadoProcessing () {
    const cond = {
      'state.type': { $all: ['receive', 'processing completed'] }  // Options: $all, $nin, $in
    }
    return receiveModel.find(cond)
            .populate({
              path: 'client',
              select: 'email city',
              populate: { path: 'user' }
            })
            .populate('business', ['name', 'address', 'phones', 'type'])
            .populate('products.product', ['name', 'description','price', 'category'])
  }

  function findByClient (_id) {
    if (!ObjectId.isValid(_id)) {
      return null
    }
    const cond = {
      client: _id
    }
    return receiveModel.findOne(cond)
            .populate('business', ['name', 'address', 'phones', 'type'])
            .populate('products.product', ['name', 'description','price', 'category'])
  
  }

  function deleteById (_id) {
    if (!ObjectId.isValid(_id)) {
      return null
    }
    return receiveModel.deleteOne({_id})
  }

  return {
    create, // implementado
    update,
    findById, // implementado
    findByClient,

    //ADMINISTRADOR
    findByIdForAdmin,
    findByEstadoReceive,
    findByEstadoProcessing,
    deleteById
  }
}
