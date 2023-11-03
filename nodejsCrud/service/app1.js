const data  = require("../DAO/app1")

async function insertService(
    bagID,
    bagname,
    bagtype,
    color,
    price
){
    return await data.insertData(
        bagID,
    bagname,
    bagtype,
    color,
    price
    )

}
insertService(2,"american touristor",'traveller','red','500');