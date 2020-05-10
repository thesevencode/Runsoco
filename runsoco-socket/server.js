'use strict'

const express = require('express')
const app = express()
const server = require('http').Server(app)

const io = require('socket.io')(server)
const socketioJwt   = require("socketio-jwt");

const api = io.of('/server')
const admin = io.of('/admin')
const sale = io.of('/sale')

let clientsSale = new Map();
const port = process.env.PORT || 5000


api.on('connection', (socket) => {

    // console.log("API CONECTADO")

    socket.on('new-sale', (sale) => {
        console.log("NUEVO PEDIDO API:",sale)

        //Enviar notificacion a los administradores
        admin.emit('new-sale', sale)

    })

    socket.on('sale-confirmation', (sale) => {
        //Enviar notificacion a los administradores
        admin.emit('sale-confirmation', sale)
    })

})


admin.use(socketioJwt.authorize({
    secret: 'bytecodePuerto2019',
    handshake: true
}));

admin.on('connection', (socket) => {

    console.log("ADMI CONECTADO")

    socket.on('accept-sale', (data) => {
        //IDPEDIDO,IDCLIENTE
        data.msj = "Pedido aceptado!"
        const socketID = searchClientSale( data.client)
        sale.to(socketID).emit('accept', data);

    })

    socket.on('refuse-sale', (data) => {
        //IDPEDIDO,IDCLIENTE
        data.msj = "Pedido rechazado :("
        const socketID = searchClientSale( data.client)
        sale.to(socketID).emit('refuse', data);
        
    })

})

sale.on('connection', (socket) => {
    
    clientsSale.set(socket.id, socket.handshake.query.id) //guardando a los clientes


    socket.on('disconnect', (reason) => {
       
        clientsSale.delete(socket.id);
    });

})


function searchClientSale(idClient){
    let result = null
    for (let [k, v] of clientsSale) {
        if(idClient === v) {
           result = k
        }
    }
    return result
}



// io.on('connection', (socket) => {
//     console.log('a user connected');

//     socket.on('new-sale', (data) => {
//         console.log("NUEVO PEDIDO:",data)
//         //Enviar notificacion al administrador
//     });

//     socket.on('disconnect', function(){
//         console.log('user disconnected')
//     })
  
// })


server.listen(port, function() {
    console.log('Servidor SOCKET corriendo en http://localhost:'+ port);
});
    

