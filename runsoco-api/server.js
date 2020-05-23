'use strict'
const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const chalk = require('chalk')
const jwt = require('express-jwt')
var blacklist = require('express-jwt-blacklist')
const cors = require("cors")

const socket = require('./socket.js')
const routes = require('./app/routes')
const config = require('./config/index')
const { HandleFatalError } =  require('./utils')


const port = process.env.PORT || 3000


const app = express()
const server = http.createServer(app)

app.use(cors())


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('combined'))

app.use(express.static('./public'))


// // CORS
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
//     next();
// })


blacklist.configure({
    tokenId: '_id'
})

app.use(jwt({
    secret: config.TOKEN.secret,
    credentialsRequired: false,
    isRevoked: blacklist.isRevoked
}))


routes(app)


if (!module.parent) { // verificamos que el archivo ha sido requerido
    process.on('uncaughtException', HandleFatalError)
    process.on('unhandledRejection', HandleFatalError)

    server.listen(port, () => {

        console.log(`${
            chalk.green('[runsoco-api]')
            } server listened on port ${port}`)

        //Inicar conexíon a SOCKET DEL SERVER
        socket()
    })
}



module.exports = server

