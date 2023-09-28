const data = require("../DAO/data.dao");

async function insertService(
  d,
  first_name,
  last_name,
  gender,
  birthdate,
  email_id,
  country_of_birth
) {
  return await data.insertData(
    d,
    first_name,
    last_name,
    gender,
    birthdate,
    email_id,
    country_of_birth
  );
}

async function getService(){
    return await data.getData()
}




module.exports = { insertService,getService };
