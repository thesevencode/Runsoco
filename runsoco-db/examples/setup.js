'use strict'

const uri = 'mongodb+srv://@bytecode-dk6m4.mongodb.net/runsoco?retryWrites=true&w=majority'
const config = {
  user: process.env.DB_USER || 'Denis',
  pass: process.eventNames.DB_PASS || '@Denis15121015'
}

module.exports = {
  uri,
  config
}
