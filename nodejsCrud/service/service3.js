const data = require("../DAO/dao3")

async function insertService(
    StudentID,
  FirstName,
  LastName,
  Email,
  AddressLine,
  City 
){
    return await data.insertData(
        StudentID,
        FirstName,
        LastName,
        Email,
        AddressLine,
        City
    )
}


async function getService(id){
    return await data.getData
}

getService(1)
module.exports={insertService}