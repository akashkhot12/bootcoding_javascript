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

module.exports={insertService}