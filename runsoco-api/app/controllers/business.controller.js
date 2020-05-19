'use strict'

const httpStatus = require('http-status')
const APIError = require('../helper/APIError');

const DB = require('../../db')

module.exports =  async ()=>{

    const { Business } = await DB()


    async function searchByType(req, res, next) {
        const { type } =  req.params

        let business = []
        try{
            business = await Business.findByType(type)
        } catch (e) {
            //ERROR de la base de datos
            const err = new APIError('Algo salio mal, intentlo de nuevo mas tarde!', httpStatus.INTERNAL_SERVER_ERROR, true)
            return next(err)
        }

        res.status(200).json({
            status: true,
            message: 'Operacion exitosa!',
            data: business
        })
        
    }

    async function getNames(req, res, next){
        let business
        try{
            business = await Business.findAllOnlyName()
        }catch(e){
            //ERROR de la base de datos
            const err = new APIError('Algo salio mal, intentlo de nuevo mas tarde!', httpStatus.INTERNAL_SERVER_ERROR, true)
            return next(err)
        }
        res.status(200).json({
            status: true,
            message: 'Operacion exitosa!',
            data: business
        })
    }


    return {
        searchByType,
        getNames
    }

}