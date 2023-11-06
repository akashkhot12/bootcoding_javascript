const data = require("../DAO/app1");
const { getData } = require("../DAO/dao3");

async function insertService(bagID, bagname, bagtype, color, price) {
  return await data.insertData(bagID, bagname, bagtype, color, price);
}
// insertService(2, "american touristor", "traveller", "red", "500");

async function getService(id){
  return await data.getData
}


module.exports = { insertService,getService };
