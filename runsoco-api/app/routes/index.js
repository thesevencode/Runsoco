'use strict'

let authRouter = require('./auth.routes')
let clientRouter = require('./client.routes')
let adminRouter = require('./admin.routes')
let businessRouter = require('./business.routes')
let productRouter = require('./product.routes')
let saleRouter = require('./sale.routes')
let giftRouter = require('./gift.routes')



const {  ValidationError } = require('express-validation')

const httpStatus = require('http-status')
const APIError =  require('../helper/APIError')

module.exports = async (app) => {


    app.use('/api/auth', await authRouter())
    app.use('/api/client', await clientRouter())
    app.use('/api/admin', await adminRouter())
    app.use('/api/business', await businessRouter())
    app.use('/api/product', await productRouter())
    app.use('/api/sale', await saleRouter() )
    app.use('/api/gift', await giftRouter() )




    app.use((err, req, res, next) => {
        console.log("ERROR:", err)
        if (err instanceof ValidationError) {
            const error = new APIError('Los datos son invalidos!', err.statusCode, true);
            return next(error);
        }else if(!(err instanceof APIError)){
            const apiError = new APIError(err.message, err.status, true)
            return next(apiError)
        }

        return next(err)

        // } else if (!(err instanceof APIError)) {
        //     console.log("OTRO ERRRORRR")
        // const apiError = new APIError(err.message,httpStatus.BAD_REQUEST, err.isPublic);
        // return next(apiError);
        // }
        // return next(err);
    })

    //manejo de respuesta de errores
    app.use((err, req, res, next) => {// eslint-disable-line no-unused-vars
        res.status(err.status).json({
            message: err.isPublic ? err.message : httpStatus[err.status],
            status: false,
            // stack: config.env === 'development' ? err.stack : {}
        })
    }
)


   
    
       
}