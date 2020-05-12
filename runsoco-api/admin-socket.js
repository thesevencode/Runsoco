const io = require('socket.io-client')
socket = io('https://bytecode-socket.herokuapp.com/admin', { 'forceNew': true , query:{
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWIxZjRhYzViNTAxMjI2N2MzMjQ5NmQiLCJlbWFpbCI6ImRlbmlzcmljYXJkb3ZpbGNhc3ZpbGxhbGJhQGdtYWlsLmNvbSIsInBlcm1pc3Npb25zIjpbImFkbWluOnRydWUiXSwiaWF0IjoxNTg5MDk2MDg2LCJleHAiOjE1ODkyNjg4ODZ9.PZTUmjc3kwPWlSkRn1juzk__lsnIKzIB-sJ3qZJx-AQ'
}})

socket.on('connect', () => {
    console.log("CONECTADO ADMINISTRADOR")

    socket.on('new-sale',function(mensaje){
        console.log("RECIBIENDO MENSAJE", mensaje)

        socket.emit('accept-sale', { client: "5eb1fd1d121484411478875d", id: ""})
    })

    socket.on('sale-confirmation',function(mensaje){
        console.log("PEDIDO CONFIRMADO", mensaje)
    })




});