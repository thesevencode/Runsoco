'use strict'

module.exports = (err) => {
    console.log('ERRORR')
    console.error(err.message)
    console.error(err.stack)
    process.exit(1)
}