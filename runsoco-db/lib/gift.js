'use strict'

const Mongoose = require('mongoose')
const ObjectId = Mongoose.Types.ObjectId

module.exports = function (giftModel) {

  async function createOrUpdate (gift) {
    const cond = {
      _id: gift._id
    }
    const existingGift = await giftModel.findOne(cond)

    if (existingGift) {
      const updated = await giftModel.updateOne(
        cond,
        { $set: gift }
      )

      return updated ? giftModel.findOne(cond) : existingGift
    }
   
    const result = await giftModel.create(gift)
    return result.toJSON()
  }

  function findForClient () {
    const cond = {
      quantity: { $gt: 0 }
    }

    return giftModel.find(cond)
              .populate('business', ['name', 'address'])
  }

  function findForAdmin () {
    return giftModel.find()
  }

  return {
    createOrUpdate,
    findForClient,
    findForAdmin
  }
}
