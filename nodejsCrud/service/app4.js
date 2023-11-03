const data = require("../DAO/app4");

async function insertService(
    teacherID,
    firstName,
    lastName,
    batch,
    sallary,
    subject
){
    return await data.insertData(
        teacherID,
    firstName,
    lastName,
    batch,
    sallary,
    subject
    )
};


module.exports={insertService}