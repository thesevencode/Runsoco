const io = require('socket.io-client')
socket = io('http://localhost:5000/admin', { 'forceNew': true , query:{
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWFjZmY4NzllMTA0MzAwMjQyZGZhY2MiLCJlbWFpbCI6ImRlbmlzQGdtYWlsLmNvbSIsImNpdHkiOiJwdWVydG8gbWFsZG9uYWRvIiwic2hhcmVDb2RlIjoiemt4eXgiLCJ1c2VyIjp7Il9pZCI6IjVlYWNmZjg3OWUxMDQzMDAyNDJkZmFjYiIsIm5hbWUiOiJkZW5pcyIsIl9fdiI6MH0sImNyZWF0ZWRBdCI6IjIwMjAtMDUtMDJUMDU6MDU6MTEuMjU4WiIsInVwZGF0ZWRBdCI6IjIwMjAtMDUtMDJUMDU6MDU6MTEuMjU4WiIsIl9fdiI6MCwicGVybWlzc2lvbnMiOlsiY2xpZW50OnRydWUiXSwiaWF0IjoxNTg4Mzk1OTExfQ.717H9TF9i8SQLvz-8-ppYgQRCt6RhbvcteUKsmbu59c'
}})

socket.on('connect', () => {
    console.log("CONECTADO ADMINISTRADOR")

    socket.on('new-sale',function(mensaje){
        console.log("RECIBIENDO MENSAJE", mensaje)

        socket.emit('accept-sale', { client: "5eb1fd1d121484411478875d", id: ""})

        // socket.emit('refuse-sale', { client: "5eb1fd1d121484411478875d", id: ""})

    })




});