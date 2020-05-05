
const db = require('..')
const setup = require('./setup')

async function run () {
  const { uri, config } = setup
  const { Product } = await db(uri, config).catch(handleFatalError)

  // ==== CREACION DE NUEVO EMPRESA ==========

  var producto = {
    business: "5eb0e8573a443324d878789d",
    name: "Ensalada mexicana",
    description: "",
    img: "https://astoria.com.pe/wp-content/uploads/2018/09/193-420x280.jpg",
    price: 14.5,
    category: "ensaladas"
  }

//   const nuevoProducto = await Product.create(producto).catch(handleFatalError)
//   console.log('PRODUCTO NUEVO: ', nuevoProducto)

  // ======= BUSCANDO POR TYPE

    var search = await Product.findByIdBusiness('5eb0937a312e8a1d1851db95').catch(handleFatalError)
    console.log('RESULTADO: ', search)


}

function handleFatalError (err) {
  console.log('ERRORR')
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}

run()
