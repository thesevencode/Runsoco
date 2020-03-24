'use strict'

let authRouter = require('./auth.routes')


module.exports = async (app) => {


    app.use('/api/auth', await authRouter())
}