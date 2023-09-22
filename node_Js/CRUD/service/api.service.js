const data = require('../DAO/user.dao')

async function getService(){
    return await data.getData();
}

module.exports = {getService}