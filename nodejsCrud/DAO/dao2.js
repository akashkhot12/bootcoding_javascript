const { Pool, Client, Query } = require("pg");
const db = require("../Connections/connection2");

const query = async (req, res) => {
  const pool = new Pool(db.postg);
  const result = pool.query(sql, (err, res) => {
    if (err) {
      throw err;
    }
    return result;
  });
};

const createTable = async () => {
  const pool = new Pool(db.postg);
  const generateTable = `CREATE TABLE Companies (
        id bigint NOT NULL GENERATED ALWAYS AS IDENTITY (INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 999999999 CACHE 1),
        name varchar(50),
        address text,
        email varchar(50),
        phone varchar(10)
      );`;

  const result = pool.query(generateTable);
  pool.end();
};

const insertdata = async (name, address, email, phone) => {
  const pool = new Pool(db.postg);
  const insert = `insert into public.Companies(name,address,email,phone) values('${name}','${address}','${email}','${phone}')`;
  const res = await pool.query(insert);
  message = "insert data";
  if (res.affectedRows) {
    message: message;
  }
  pool.end();
  return res;
};

insertdata("akash","ram mandir ward bhandara","akash@gmail.com","9834281002")

const getData = async (id) => {
  const pool = new Pool(db.postg);
  const qry = ` select * from public.Companies WHERE id = ${id}`;
  const res = await pool.query(qry);
  if (res.affectedRows) {
    message: message;
  }

  pool.end();
  console.log(res.rows);
  return res.rows;
};

module.exports = { createTable, insertdata, getData };
