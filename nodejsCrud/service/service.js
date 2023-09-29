const data = require("../DAO/dao");

async function insertService(EmployeeID,FirstName,LastName,Email,AddressLine,City){
    return await data.insertData(EmployeeID,FirstName,LastName,Email,AddressLine,City);
}

async function getService(id){
    return await data.getData(id);
}

async function deleteService(id){
    return await data.deleteFunction(id);
}


module.exports = {insertService , getService,deleteService}      