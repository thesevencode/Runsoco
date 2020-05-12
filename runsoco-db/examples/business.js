
const db = require('..')
const setup = require('./setup')

async function run () {
  const { uri, config } = setup
  const { Business } = await db(uri, config).catch(handleFatalError)

  // ==== CREACION DE NUEVO EMPRESA ==========

  var empresa = {
    name: "Pizzeria Israel",
    businessName: "PIZZERIA ISRAEL S.A.C.",
    ruc: 20602929524,
    city: 'Puerto Maldonado',
    img: 'https://scontent-lim1-1.xx.fbcdn.net/v/t1.0-9/13260157_677734439035671_9211639863977875870_n.jpg?_nc_cat=111&_nc_sid=dd9801&_nc_eui2=AeG9wa6n9tgfE_W7G-d5HyC_JLJ6siTG400ksnqyJMbjTZRuu02z9QX1W7SPVHY9vPngkvSU6raD4T0iVJF1WYia&_nc_ohc=LKmYYqQrfkEAX8nUdlj&_nc_ht=scontent-lim1-1.xx&oh=c39d5eab09397ebf7ce5f03e84411339&oe=5EE0C1D0',
    district: 'Tambopata',
    province: 'Tambopata',
    department: 'Madre de Dios',
    address: 'Pj. Sinami Nro. A-18 (Esq con Jr las Chimicuas)',
    horary: [
      {
        day: 'lunes',
        open: 8,
        close: 14
      },
      {
        day: 'martes',
        open: 8,
        close: 14
      },
      {
        day: 'miercoles',
        open: 8,
        close: 14
      },
      {
        day: 'jueves',
        open: 8,
        close: 14
      },
      {
        day: 'viernes',
        open: 10,
        close: 16
      },
      {
        day: 'sabado',
        open: 10,
        close: 16
      }

    ],
    location: {
      latitude: -12.5859578,
      longitude: -69.201733,
      address: '6 De Diciembre 195, Puerto Maldonado 17001'
    },
    type: ['pizzeria'],
    categories: [{
      description: 'familiar'
    }, {
      description: 'mixta'
    }, {
      description: 'pasta'
    }],
    phones: ['981935422']
  }

  const nuevaEmpresa = await Business.create(empresa).catch(handleFatalError)
  console.log('PEDIDO NUEVO: ', nuevaEmpresa)

  // ======= BUSCANDO POR TYPE

  // var search = await Business.findByType('heladeria').catch(handleFatalError)
  // console.log('RESULTADO: ', search)
}

function handleFatalError (err) {
  console.log('ERRORR')
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}

run()
