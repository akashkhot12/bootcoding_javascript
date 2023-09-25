const data = require("../DAO/data.dao");

async function insertService(id, name, age, address, salary) {
  return await data.insdata(id, name, age, address, salary);
}

module.exports = { insertService };
