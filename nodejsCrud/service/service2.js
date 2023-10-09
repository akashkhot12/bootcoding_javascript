const data = require("../DAO/dao2");

async function insertService(name, address, email, phone) {
  return await data.insertdata(name, address, email, phone);
}
insertService("pallavi","hudkeshwar","pallavi@gmail.com","9884787828")

async function getService(id) {
  return await data.getData(id);
}

module.exports = { insertService, getService };
