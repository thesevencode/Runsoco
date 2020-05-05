'use strict'

const db = require('..')
const setup = require('./setup')

async function run () {
  const { uri, config } = setup
  const { Sale } = await db(uri, config).catch(handleFatalError)

  // ==== CREACION DE NUEVO USUARIO ==========

  //   var pedido = {
  //     client: "5eab3b65bb1b4c0024ae2556",
  //     description: 'Pedido nuevo2',
  //     cellphone: 958227852,
  //     category: "comida",
  //     store: 'Polleria El Pollon',
  //     priceDelivery: 5,
  //     type: "outStore",
  //   }

  //   const nuevoPedido = await Sale.create(pedido).catch(handleFatalError)
  //   console.log('PEDIDO NUEVO: ', nuevoPedido)

  // ======= BUSCANDO POR ID

  var search = await Sale.findById('5eacdbb41ca0550be8c4e634').catch(handleFatalError)
  console.log('RESULTADO: ', search)
}

function handleFatalError (err) {
  console.log('ERRORR')
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}

run()
