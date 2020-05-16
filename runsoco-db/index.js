'use strict'

const setupDabatase = require('./lib/db')
const setupUserModel = require('./models/user')
const setupClientModel = require('./models/client')
const setupAdminModel = require('./models/admin')

const setupCurrierModel = require('./models/currier')
const setupBusinessModel = require('./models/business')
const setupProductModel = require('./models/product')
const setupSaleModel = require('./models/sale')
const setupGiftModel = require('./models/gift')

const setupUser = require('./lib/user')
const setupClient = require('./lib/client')
const setupAdmin = require('./lib/admin')



const setupBusiness = require('./lib/business')
const setupProduct = require('./lib/product')
const setupSale = require('./lib/sale')
const setupGift = require('./lib/gift')

// Colecciones pajaseras
const setupReceiveModel = require('./models/receive')
const setupReceive = require('./lib/receive')

const defaults = require('defaults')

module.exports = async function (uri, config) {
  config = defaults(config, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    // autoIndex: false, // Don't build indexes
    // reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    // reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4, // Use IPv4, skip trying IPv6

    useUnifiedTopology: true
  })

  const mongoose = await setupDabatase(uri, config)

  const UserModel = await setupUserModel(uri, config)
  const ClientModel = await setupClientModel(uri, config)
  const AdminModel = await setupAdminModel(uri, config)


  const CurrierModel = await setupCurrierModel(uri, config)
  const BusinessModel = await setupBusinessModel(uri, config)
  const ProductModel = await setupProductModel(uri, config)
  const SaleModel = await setupSaleModel(uri, config)
  const GiftModel = await setupGiftModel(uri, config)


  const ReceiveModel = await setupReceiveModel(uri, config)


  const User = setupUser(UserModel)
  const Client = setupClient(ClientModel, UserModel)
  const Admin = setupAdmin(AdminModel, UserModel)
  const Business = setupBusiness(BusinessModel)
  const Product = setupProduct(ProductModel)
  const Sale = setupSale(SaleModel)
  const Gift = setupGift(GiftModel)
  const Receive = setupReceive(ReceiveModel)


  return {
    User,
    Client,
    Admin,
    Business,
    Product,
    Sale,
    Gift,
    Receive
  }
}
