'use strict'

const httpStatus = require('http-status')
const APIError = require('../helper/APIError');

const DB = require('../../db')

module.exports =  async ()=>{

    const { Product } = await DB()


    async function searchByIdBusiness(req, res, next) {
        const { idBusiness } =  req.params

        let products = []
        try{
            products = await Product.findByIdBusiness(idBusiness)
        } catch (e) {
            //ERROR de la base de datos
            const err = new APIError('Algo salio mal, intentlo de nuevo mas tarde!', httpStatus.INTERNAL_SERVER_ERROR, true)
            return next(err)
        }

        res.status(200).json({
            status: true,
            message: 'Operacion exitosa!',
            data: products
        })
        
    }


    return {
        searchByIdBusiness
    }

}