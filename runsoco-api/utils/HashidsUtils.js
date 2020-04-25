'use strict'

const Hashids = require('hashids/cjs')

class HashidsUtils {

    constructor(key, num = 1, logintud = 5){
        this.key = key
        this.num = num
        this.logintud = logintud
    }

    generate(){
        const hasdis = new Hashids(this.key, this.logintud)
        return hasdis.encode(this.num)
    }

}

module.exports = HashidsUtils