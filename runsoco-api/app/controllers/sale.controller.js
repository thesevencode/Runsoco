'use strict'

const httpStatus = require('http-status')
const APIError = require('../helper/APIError');

const socket = require('../../socket')()

const DB = require('../../db')

module.exports =  async ()=>{

    const { Sale } = await DB()


    async function register(req, res, next) {
        let body = req.body
        
        let sale
        try{
            
            sale = await Sale.create(body)
            console.log("PRODUCTOS:", sale.products)

            //EMITIR EVENTOS
            socket.emit('new-sale', sale);
            res.status(200).json({
                status: true,
                message: 'Operacion exitosa, pedido creado!',
                data: sale._id
            })

        } catch (e) {
            //ERROR de la base de datos
            const err = new APIError('Algo salio mal, intentlo de nuevo mas tarde!', httpStatus.INTERNAL_SERVER_ERROR, true)
            return next(err)
        }

    }


    return {
        register
    }

}