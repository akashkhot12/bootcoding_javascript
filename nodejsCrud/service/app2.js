const data = require("../DAO/app2");

async function insertService(
  bookID,
  bookname,
  pages,
  type,
  price,
  typeofpages
) {
  return await data.insertData(
    bookID,
    bookname,
    pages,
    type,
    price,
    typeofpages
  );
}

async function getService(id){
  return await data.getdata
}

module.exports = { insertService ,getService};
