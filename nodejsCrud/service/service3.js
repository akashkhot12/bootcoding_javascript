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
insertService(3,"akash","sadavarsti","akash40@gmail.com","nagpur","nagpur")

module.exports={insertService}