'use strict'

const express = require('express')
const auth = require('express-jwt')
const guard = require('express-jwt-permissions')()

const { productController } = require('../controllers')()
const { TOKEN } = require('../../config/index')

const router = express.Router()

module.exports = async () => {

    const controller = await productController()

    router
        .get('/', (req, res) => {
            res.send("hola mundo")
        })
        .get('/business/:idBusiness', auth(TOKEN), guard.check(['client:true']), controller.searchByIdBusiness) //buscando negocios por tipo

    return router
}