'use strict'
const httpStatus = require('http-status')
const APIError = require('../helper/APIError')

module.exports = ()=>{

    async function findById(ModelDB, id, next){
        let result
        try{
            
            result = await ModelDB.findById(id)
        } catch (e) {
            //ERROR de la base de datos
            const err = new APIError('Algo salio mal, intentelo de nuevo mas tarde!', httpStatus.INTERNAL_SERVER_ERROR, true)
            return next(err)
        }
        if(!result){
            return next(new APIError('No ha sido encontrado!', httpStatus.NOT_FOUND, true))
        }

        return result
    }


    return {
        findById
    }
}
