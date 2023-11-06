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

async function getService(id){
    return await data.getData
}

module.exports={insertService,getService}