const data = require("../DAO/dao");

async function insertService(EmployeeID){
    return await data.insertData(id,first_name,last_name,gender,birthdate,email_id,country_of_birth);
}