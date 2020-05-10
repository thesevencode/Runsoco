const io = require('socket.io-client')
socket = io('https://bytecode-socket.herokuapp.com/sale', { 'forceNew': true, query:{
    id: '5ea5bf55930c640024a87217'
}})

socket.on('connect', () => {

    console.log("CONECTADO CLIENTE: ", socket.id)

});

socket.on('refuse',function(data){
    console.log("MI PEDIDO HA SIDO RECHAZADO", data)
})

socket.on('accept',function(data){
    console.log("MI PEDIDO HA SIDO ACEPTADO", data)
})