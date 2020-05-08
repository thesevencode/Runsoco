'use strict'

const io = require('socket.io-client')

let socket = null

module.exports = () => {

   if (!socket) {
      try {
         socket = io('http://localhost:5000/server', { 'forceNew': true } )
      } catch (error) {
         handleFatalError(error)
      }
   }



   return socket
}

function handleFatalError(err) {
   console.log('ERRORR')
   console.error(err.message)
   console.error(err.stack)
   process.exit(1)
}

