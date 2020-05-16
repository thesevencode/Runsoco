'use strict'

const db = require('..')
const setup = require('./setup')

async function run () {
  const { uri, config } = setup
  const { Gift } = await db(uri, config).catch(handleFatalError)

  // ==== CREACION DE NUEVO PEDIDO ==========

      //DE CUALQUIER LUGAR

    var nuevo = {
      business: "5eb0aab3ffe167408034bf8b",
      points: 20,
      quantity: 5,
      img: "https://publimetro.pe/resizer/htrPgfcBrecvHh9mtQehS48nJoY=/980x528/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/ZYKFE4NLORE47ETYJ4GSM52RNA.jpg",
      description: "Pollo a la brasa Deliciosa"
    }



    // const resultado = await Gift.createOrUpdate(nuevo).catch(handleFatalError)
    // console.log('PEDIDO NUEVO: ', resultado)

  var all = await Gift.findForClient().catch(handleFatalError)
  console.log('RESULTADO: ', all)

}

function handleFatalError (err) {
  console.log('ERRORR')
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}

run()
