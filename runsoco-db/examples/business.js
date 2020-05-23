
const db = require('..')
const setup = require('./setup')

async function run () {
  const { uri, config } = setup
  const { Business } = await db(uri, config).catch(handleFatalError)

  // ==== CREACION DE NUEVO EMPRESA ==========

  var empresa = {
    name: "Gustitos del Cura",
    businessName: "GUSTITOS DEL CURA S.A.C",
    ruc: 20490840345,
    city: 'Puerto Maldonado',
    img: 'http://soloparaviajeros.pe/wp-content/uploads/2018/09/1034565_Ka70umd8kmGCOWJZdiJbnAkIQkz6OJPLgf75EGsLNmA.jpg',
    district: 'Tambopata',
    province: 'Tambopata',
    department: 'Madre de Dios',
    address: 'Jr. Tacna  NRro. M-2',
    horary: [
      {
        day: 'lunes',
        open: 8,
        close: 11
      },
      {
        day: 'martes',
        open: 8,
        close: 11
      },
      {
        day: 'miercoles',
        open: 8,
        close: 11
      },
      {
        day: 'jueves',
        open: 8,
        close: 11
      },
      {
        day: 'viernes',
        open: 8,
        close: 11
      },
      {
        day: 'sabado',
        open: 8,
        close: 10
      }

    ],
    location: {
      latitude: -12.5859578,
      longitude: -69.201733,
      address: '6 De Diciembre 195, Puerto Maldonado 17001'
    },
    type: ['pasteleria'],
    categories: [{
      description: 'torta'
    }, {
      description: 'helado'
    }],
    phones: ['981935498']
  }

  const nuevaEmpresa = await Business.create(empresa).catch(handleFatalError)
  console.log('EMPRESA NUEVO: ', nuevaEmpresa)

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
