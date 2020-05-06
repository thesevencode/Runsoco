'use strict'

const db = require('..')
const setup = require('./setup')

async function run () {
  const { uri, config } = setup
  const { Sale } = await db(uri, config).catch(handleFatalError)

  // ==== CREACION DE NUEVO PEDIDO ==========

      //DE CUALQUIER LUGAR

    var pedido = {
      client: "5eab3b65bb1b4c0024ae2556",
      description: 'Pedido nuevo2',
      cellphone: 958227852,
      category: "comida",
      payment: "efectivo",
      store: 'Polleria El Pollon',
      priceDelivery: 5,
      type: "outStore",
    }

    //DE UNA DE NUESTROS NEGOCIOS REGISTRADOS
    var pedido2 = {
      client: "5eb1fd1d121484411478875d",
      business: "5eb0f07f2e952a3184799550",
      address: "Av. Sinchi Roca",
      payment: "efectivo",
      products: [{
        product: "5eb0f07f2e952a3184799550",
        quantity: 1,
        subtotal: 39
      }],
      category: "comida",
      cellphone: 987654321,
      total: 43,
      priceDelivery: 4,
      type: "inStore"
    }

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
