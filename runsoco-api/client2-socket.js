const io = require('socket.io-client')
socket = io('http://localhost:5000/sale', { 'forceNew': true, query:{
    id: 'jljnkl'
}})

socket.on('connect', () => {

    console.log("CONECTADO CLIENTE: ", socket.id)

    socket.on('accept',function(data){
        console.log("MI PEDIDO HA SIDO ACEPTADO", data)
    })
});