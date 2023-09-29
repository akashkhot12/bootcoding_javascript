const { Pool, Client, Query } = require("pg");
const db = require("../Connections/connection");

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
    const generateTable = `CREATE TABLE IF NOT EXISTS public.worker (
        EmployeeID INT PRIMARY KEY,
        FirstName VARCHAR(50) NOT NULL,
        LastName VARCHAR(50) NOT NULL,
        Email VARCHAR(50) UNIQUE,
        AddressLine VARCHAR(50),
        City VARCHAR(100)
      );`;
    const result = pool.query(generateTable);
    pool.end();
  };

  createTable()


  
const insertData = async (EmployeeID,FirstName,LastName,Email,AddressLine,City) => {
    const pool = new Pool(db.database);
    const insert = `insert into public.worker(EmployeeID,FirstName,LastName,Email,AddressLine,City)
      values('${EmployeeID}','${FirstName}','${LastName}','${Email}','${AddressLine}','${City}')`;
  
    const res = await pool.query(insert);
    let message = "data is updated"
    if (res.affectedRows) {
      message: message;
    }
  
    pool.end();
    return res;
  };
  
  insertData(1,'vansh','belekar','vansh@gmail.com','khat road','bhandara')