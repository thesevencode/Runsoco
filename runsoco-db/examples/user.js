'use strict'

const db = require('..')
const setup = require('./setup')

async function run () {
  const { uri, config } = setup
  const { User } = await db(uri, config).catch(handleFatalError)

  // ==== CREACION DE NUEVO USUARIO ==========

  var user = {
    name: 'Denis',
    password: '@denis15121015'
  }

  const newUser = await User.createOrUpdate(user).catch(handleFatalError)
  console.log('USUARIO NUEVO: ', newUser)

  // ======= BUSCANDO POR ID

  var search = await User.findById('5e761ec85720ea2e8cbd2751').catch(handleFatalError)
  console.log('RESULTADO: ', search)
}

function handleFatalError (err) {
  console.log('ERRORR')
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}

run()
