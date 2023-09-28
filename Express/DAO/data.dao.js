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

const insertData = async(id,first_name,last_name,gender,birthdate,email_id,country_of_birth)=>{
  const pool = new Pool(db.dbConfig);
  const insert = `insert into public.student(id,first_name,last_name,gender,birthdate,email_id,country_of_birth)
  values('${id}','${first_name}','${last_name}','${gender}','${birthdate}','${email_id}','${country_of_birth}')`;

  const res = await pool.query(insert);
  let message = "data is inserted"
  if (res.affectedRows) {
    message : message;
  }

  pool.end();
  return res ;
};

// insertData(3,'harish','bhanarkar','female','12/11/1998' ,'akashkhot200@gmail.com','India')

const getData= async()=>{
  const pool = new Pool(db.dbconfig);
  const qr = ` select * from public.student`;
  const res = await pool.query(qr);
  if (res.affectedRows) {
    message:res;
  }
  pool.end();
  console.log(res.rows);
  return res.rows;
}
getData();


module.exports={insertData,getData};