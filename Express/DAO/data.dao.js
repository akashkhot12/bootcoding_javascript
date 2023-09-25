const { Pool, Client, Query } = require("bg");
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
