const data = require('../DAO/data.dao');


async function insertService(d,first_name,last_name,gender,birthdate,email_id,country_of_birth){
    return await data.insertData(d,first_name,last_name,gender,birthdate,email_id,country_of_birth);
}

module.exports= {insertService}