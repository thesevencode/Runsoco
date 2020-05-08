# RUNSOCO SOCKET

Plataforma implementando con Socket.io
### URL SERVER HEROKU:  https://bytecode-socket.herokuapp.com

## ADMINISTRADOR

**Conexíon**
- const io = require('socket.io-client')
- socket = io('https://bytecode-socket.herokuapp.com/admin', { 'forceNew': true , query:{
    - token: 'token' => token del administrador
- }})

**Eventos Para ESCUCHAR**

//Evento para recibir los nuevos productos agregados
- socket.on('new-sale',function(data){
     - console.log("RECIBIENDO PRODUCTO", data)
- })

**Eventos Para EMITIR**
- socket.emit('accept-sale', { client: "id cliente", id: "id del producto"}) => aceptar pedido
- socket.emit('refuse-sale', { client: "id cliente", id: "id del producto"}) => rechazar pedido
    

## CLIENTE

**Conexíon**
- const io = require('socket.io-client')
- socket = io('https://bytecode-socket.herokuapp.com/sale', { 'forceNew': true , query:{
    - id: 'id CLIENTE' => ID del cliente
- }})

**Eventos Para ESCUCHAR**

//Evento que sido rechazado su pedido
- socket.on('refuse',function(data){
    - console.log("MI PEDIDO HA SIDO RECHAZADO", data)
- })

//Evento que sido aceptado su pedido
- socket.on('accept',function(data){
    - console.log("MI PEDIDO HA SIDO ACEPTADO", data)
- })
