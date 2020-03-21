'use strict'

const setupDabatase = require('./lib/db')
const setupUserModel = require('./models/user')
const setupClientModel = require('./models/client')

const setupUser = require('./lib/user')
const setupClient = require('./lib/client')

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

  const User = setupUser(UserModel)
  const Client = setupClient(ClientModel, UserModel)

  return {
    User,
    Client
  }
}
