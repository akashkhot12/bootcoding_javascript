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

const insertData = async (
  EmployeeID,
  FirstName,
  LastName,
  Email,
  AddressLine,
  City
) => {
  const pool = new Pool(db.database);
  const insert = `insert into public.worker(EmployeeID,FirstName,LastName,Email,AddressLine,City)
      values('${EmployeeID}','${FirstName}','${LastName}','${Email}','${AddressLine}','${City}')`;

  const res = await pool.query(insert);
  let message = "data is updated";
  if (res.affectedRows) {
    message: message;
  }

  pool.end();
  return res;
};

//   insertData(3,'chiu','khot','chiu@gmail.com','ram road','lakhani')

//   get data

const getData = async (id) => {
  const pool = new Pool(db.database);
  const qry = ` select * from public.worker WHERE EmployeeID = ${id}`;

  const res = await pool.query(qry);
  if (res.affectedRows) {
    message: res;
  }
  pool.end();
  console.log(res.rows);
  return res.rows;
};

// getData();


// update data
const updateUser = async (EmployeeID,FirstName,LastName,Email,AddressLine,City) => {
  const pool = new Pool(db.database);
  const qr = `UPDATE public.worker SET FirstName = '${FirstName}', LastName ='${LastName}', Email='${Email}', AddressLine ='${AddressLine}', City='${City}' WHERE EmployeeID = ${EmployeeID}`;

  const res = await pool.query(qr);
  if (res.affectedRows) {
    message: res;
  }
  pool.end();
  console.log(res.rows);
  return res.rows;
};



// updateUser(1,'lokesh','khot','lokesh@gmail.com','wijahbkdj','hbf')







// delete data
async function deleteFunction(id) {
  const pool = new Pool(db.database);
  const qr = `DELETE FROM public.worker Where id = ${id}`;
  const res = await pool.query(qr);
  console.log(res);
  if (res.affectedRows) {
    message: "row delected successfully";
  } else {
    message: "not found";
  }
  pool.end();
  console.log(res.rows);
  return res.rows;
}

module.exports = { insertData, getData, updateUser, deleteFunction };
