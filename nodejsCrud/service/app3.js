const data = require("../DAO/app3");

async function insertService(gadgetID, gadgetname, object, type, model) {
  return await data.insertData(gadgetID, gadgetname, object, type, model);
}

async function getService(id){
  return await data.getData
}

module.exports = { insertService,getService };
