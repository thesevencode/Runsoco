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
        .get('/verification', auth(TOKEN), guard.check(['client:true']), controller.verification) //registro de cliente

        
        .get('/receive', auth(TOKEN), guard.check(['admin:true']), controller.getReceive) //registro de todos los pedidos recibidos
        .get('/processing', auth(TOKEN), guard.check(['admin:true']), controller.getProcessing) //registro de todos los pedidos recibidos
        .get('/completed', auth(TOKEN), guard.check(['admin:true']), controller.getCompleted) //registro de todos los pedidos recibidos
        .post('/accept', auth(TOKEN), guard.check(['admin:true']), validate(saleValidation.postReceive), controller.postAccept) //registro de todos los pedidos recibidos
        .post('/refuse', auth(TOKEN), guard.check(['admin:true']), validate(saleValidation.postAccept),  controller.postRefuse) //registro de todos los pedidos recibidos

    return router
}