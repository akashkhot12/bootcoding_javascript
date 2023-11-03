const { Pool, Client, Query } = require("pg");
const db = require("../Connections/connection3");

const query = async (req, res) => {
  const pool = new Pool(db.database);
  const result = pool.query(sql, (err, res) => {
    if (err) {
      throw err;
    }
    return result;
  });
};

const createTable = async () => {
  const pool = new Pool(db.database);
  const generateTable = `CREATE TABLE IF NOT EXISTS public.student (
        StudentID INT PRIMARY KEY,
        FirstName VARCHAR(50) NOT NULL,
        LastName VARCHAR(50) NOT NULL,
        Email VARCHAR(50) UNIQUE,
        AddressLine VARCHAR(50),
        City VARCHAR(100)
      )`;
   const result = pool.query(generateTable) ;
   pool.end();
};

const insertData = async(
  StudentID,
  FirstName,
  LastName,
  Email,
  AddressLine,
  City
)=>{
  const pool = new Pool(db.database)
  const insert = `insert into public.student(StudentID,FirstName,LastName,Email,AddressLine,City)
  values('${StudentID}','${FirstName}','${LastName}','${Email}','${AddressLine}','${City}')`; 
  const result = await pool.query(insert);
  let message = "data is updated";
  if (result.affectedRows) {
    message: message;
  }

  pool.end();
  return result;
}

insertData(1,"akash","khot","akashkhot03@gmail.com","bhandara","bhandara");



module.exports={insertData}