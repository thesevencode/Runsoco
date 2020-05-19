'use strict'

const express = require('express')
const auth = require('express-jwt')
const guard = require('express-jwt-permissions')()

const { businessController } = require('../controllers')()
const { TOKEN } = require('../../config/index')

const router = express.Router()

module.exports = async () => {

    const controller = await businessController()

    router
        .get('/:type', auth(TOKEN), guard.check(['client:true']), controller.searchByType) //buscando negocios por tipo
        .get('/only/names', auth(TOKEN), guard.check(['admin:true']), controller.getNames) //buscando negocios por tipo


    return router
}