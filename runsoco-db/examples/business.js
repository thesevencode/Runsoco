
const db = require('..')
const setup = require('./setup')

async function run () {
  const { uri, config } = setup
  const { Business } = await db(uri, config).catch(handleFatalError)

  // ==== CREACION DE NUEVO EMPRESA ==========

  var empresa = {
    name: "Burgos'S",
    businessName: "BURGOS'S RESTAURANT S.A.C.",
    ruc: 20602929524,
    city: 'Puerto Maldonado',
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/07/d3/2c/52/burgos-s-restaurante.jpg',
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
    type: ['restaurante'],
    categories: [{
      description: 'vegetariana'
    }, {
      description: 'saludable'
    }, {
      description: 'mariscos'
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
