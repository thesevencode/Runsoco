'use strict'
const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const chalk = require('chalk')


const port = process.env.PORT || 3000


const app = express()
const server = http.createServer(app)


app.use('/public', express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(morgan('combined'))

// CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
})


if (!module.parent) { // verificamos que el archivo ha sido requerido
    process.on('uncaughtException', handleFatalError)
    process.on('unhandledRejection', handleFatalError)

    server.listen(port, () => {
        console.log(`${
            chalk.green('[runsoco-api]')
        } server listened on port ${port}`)
    })
}
module.exports = server

function handleFatalError(err) { // console.error(`${chalk.red('[fatal error]')} ${err.message}`)
    console.error(err.stack)
    process.exit(1)
}
