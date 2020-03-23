'use strict'

const database = require('../../runsoco-db')

const { db } = require('../config')

let services = null

module.exports = async () => {
   if (!services) {
      try {
         services = await database(db.database, db.config)
      } catch (error) {
         handleFatalError(error)
      }
   }

   return services
}

function handleFatalError(err) {
   console.log('ERRORR')
   console.error(err.message)
   console.error(err.stack)
   process.exit(1)
}

