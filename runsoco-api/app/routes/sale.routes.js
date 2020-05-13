'use strict'

const express = require('express')
const auth = require('express-jwt')
const guard = require('express-jwt-permissions')()
const { validate } = require('express-validation')

const { saleController } = require('../controllers')()
const { saleValidation } = require('../validation')
const { TOKEN } = require('../../config/index')

const router = express.Router()

module.exports = async () => {

    const controller = await saleController()

    router
        .get('/', (req, res) => {
            res.send("hola mundo")
        })
        .post('/outstore', auth(TOKEN), guard.check(['client:true']), validate(saleValidation.outstore), controller.register) //registro de cliente
        .post('/instore', auth(TOKEN), guard.check(['client:true']), validate(saleValidation.instore), controller.register) //registro de cliente
        
        .get('/client', auth(TOKEN), guard.check(['client:true']), controller.getSaleByClient)
        .get('/confirmation/:idOrder', auth(TOKEN), guard.check(['client:true']), controller.confirmation) //registro de cliente
        .get('/receive/list', auth(TOKEN), guard.check(['admin:true']), controller.getReceiveList) //registro de todos los pedidos recibidos
        .get('/processing/list', auth(TOKEN), guard.check(['admin:true']), controller.getProcessingList) //registro de todos los pedidos recibidos
        
        .post('/receive/accept', auth(TOKEN), guard.check(['admin:true']), validate(saleValidation.postReceive), controller.postReceiveAccept) //registro de todos los pedidos recibidos
        .post('/receive/refuse', auth(TOKEN), guard.check(['admin:true']), validate(saleValidation.postReceive),  controller.postReceiveRefuse) //registro de todos los pedidos recibidos

    return router
}