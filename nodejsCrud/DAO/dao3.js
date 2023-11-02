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
  const generateTable = ``;
};
