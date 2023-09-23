const data = require('../DAO/data.dao')

async function getService(){
    return await data.getdata()
}

module.exports = {getService}