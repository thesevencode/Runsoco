# Modulo Base de Datos RUNSOCO-DB

Gestor: MongoDB

### Conexión

    const db = require('runsoco-db')

    const config = {
    
        url: process.env.DB_URL || "mongodb+srv://@bytecode-dk6m4.mongodb.net/runsoco?retryWrites=true&w=majority",

        config: {

            user: process.env.DB_USER || 'user',

            pass: process.env.DB_PASS || 'password'

        }
    
    }

    let services = null


    module.exports = async function initDatabase () {
      if (!services) {
        debug('Connecting to database')
        try {
          services = await db(config.db.url, config.db.config)
        } catch (e) { handleFatalError(e) }
      }
      return services // Organization, User
    }


    function handleFatalError (err) {
      console.log('ERRORR')
      console.error(err.message)
      console.error(err.stack)
      process.exit(1)
    }



A continuación se presenta las colecciones de la Base de datos:
###  User

Campos:

    -_id: String -> generado por la Base de datos
    
    -name: String -> obligatorio

    -password: String -> obligatorio
 
 
Funciones:

    1) createOrUpdate(user)
    
            param: user -> Objeto
            returns: 
                - Objeto  -> Éxito
                - Error -> Generado por la base de datos
                
    2) findById(_id)
    
            param: _id -> String
            returns: 
                - Objeto -> Éxito
                - Error -> Generado por la base de datos
                
                
###  Client

Campos:


      -_id: String -> generado por la Base de datos
      
      -user: String -> Obligatorio, referencia al modelo user
      
      -email: String -> Obligatorio
      
      -cellphone: Number -> Obligatorio
           
     -city : String 
     
Funciones :

    1) createOrUpdate(client)
    
            param: client -> Objeto
            returns: 
                - Objeto  -> Éxito
                - null -> Solo si no se pude hacer el update 
                
   2) findById(_id)
    
            param: _id -> String
            returns: 
                - Objeto -> Éxito
                - Error -> Generado por la base de datos
                
    3) findByEmail(email)
    
            param: email -> String
            returns: 
                - Objeto -> Éxito
                - Error -> Generado por la base de datos 
    
    4) findByCity(city)
    
            param: city -> String
            returns: 
                - Objeto -> Éxito
                - Error -> Generado por la base de datos    
                

####  Para mas información revisar la carpeta EXAMPLES,esta contiene ejemplos del uso de este modulo.