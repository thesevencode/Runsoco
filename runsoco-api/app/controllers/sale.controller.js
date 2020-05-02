'use strict'

const httpStatus = require('http-status')
const APIError = require('../helper/APIError');


const DB = require('../../db')
const { Token, HashidsUtils } =  require('../../utils')
const { keyToken } = require('../../config')


module.exports =  async ()=>{

    const { Sale } = await DB()


    async function register(req, res, next) {
        let body = req.body
        console.log("REGISTRANDO PEDIDO")

    }


    return {
        register
    }

}