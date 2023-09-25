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

const createTable = async () => {
  const pool = new Pool(db.dbConfig);
  const gerTable = `CREATE TABLE IF NOT EXISTS CUSTOMERS(
        ID          INT NOT NULL,
        NAME        VARCHAR (20) NOT NULL,
        AGE         INT NOT NULL,
        ADDRESS     CHAR (25),
        SALARY      DECIMAL (18, 2),
        PRIMARY KEY (ID)
     );`;

  const result = pool.query(gerTable);
  pool.end();
};

createTable();

const insdata = async (id, name, age, address, salary) => {
  const pool = new Pool(db.dbConfig);
  const insert = `insert into public.CUSTOMERS(id,name,age,address,salary) values ('${id}','${name}','${age}','${address}','${salary}')`;

  const res = await pool.query(insert);
  let message = "data is uploading";
  if (res.affectedRows) {
    message: message;
  }
  pool.end();
  return res;
};
insdata(1, "aksh khot", 24, "ram mandir ward bhandara", "2500.0");

module.exports = { insdata };
