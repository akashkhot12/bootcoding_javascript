const { Pool, Client, Query } = require("pg");
const db = require("../connections/dbConfig");

const query = async (req, res) => {
  const pool = new Pool(db.dbConfig);
  const [result] = pool.query(sql, (err, res) => {
    if (err) {
      throw err;
    }
    return result;
  });

};


const createTable = async()=>{
  const pool = new Pool(db.dbConfig);
  const generateTable = `CREATE TABLE IF NOT EXISTS public.student (
    Id 	INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gender VARCHAR(50),
    birthdate DATE,
    email_id VARCHAR(100) UNIQUE,
    country_of_birth VARCHAR(50)
);`
const result = pool.query(generateTable)
pool.end();
}

createTable();

module.exports={};