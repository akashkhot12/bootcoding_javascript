const data = require("../DAO/app3")

async function insertService(
    gadgetID,
    gadgetname,
    object,
    type,
    model
){
    return await data.insertData(
    gadgetID,
    gadgetname,
    object,
    type,
    model
    )
    
}

module.exports={insertService}