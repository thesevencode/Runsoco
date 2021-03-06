'use strict'

const db = require('..')
const setup = require('./setup')

async function run () {
  const { uri, config } = setup
  const { Client, User } = await db(uri, config).catch(handleFatalError)

  // ==== CREACION DE NUEVO CLIENTE ==========

  //   var client = {
  //       name: 'Dany',
  //       password: 'dany',
  //       city: 'Puerto Maldonado',
  //       email: 'dany@gmail.com',
  //       cellphone: 957621378
  //   }
  // const newClient = await Client.createOrUpdate(client).catch(handleFatalError)
  // console.log('Cliente: ', newClient)

  // ======= BUSCANDO POR ID

  //   var search = await Client.findById('5e76264c7abfe630b0311630').catch(handleFatalError)
  //   console.log('RESULTADO: ', search)

  // ======= BUSCANDO POR EMAIL
  //   var searchByEmail = await Client.findByEmail('dany@gmail.com').catch(handleFatalError)
  //   console.log('EMAIL: ', searchByEmail)

  // ======= BUSCANDO POR CITY
  //   var searchByCity = await Client.findByCity('puerto maldonado').catch(handleFatalError)
  //   console.log('CITY: ', searchByCity)

  // ======= BUSCANDO POR EMAIL AND PASSWORD
  var searchByEmailAndPassword = await Client.findByEmailSelectPassword('dany@gmail.com').catch(handleFatalError)
  console.log('EMAIL AND PASSWORD: ', searchByEmailAndPassword)
}

function handleFatalError (err) {
  console.log('ERRORR')
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}

run()
