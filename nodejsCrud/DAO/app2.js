const {Pool,Client,Query}=require("pg");
const db = require("../Connections/app2");

const query = async(req,res)=>{
    const pool = new Pool(db.database);
    const result = pool.query(sql,(err,res)=>{
        if (err) {
            throw err;
        }
        return result;
    })
}

const createTable = async()=>{
    const pool = new Pool(db.database);
    const generateTable = `CREATE TABLE IF NOT EXISTS public.bookstall (
        bookID INT PRIMARY KEY,
        bookname VARCHAR(50) NOT NULL,
        pages VARCHAR(50) NOT NULL,
        type VARCHAR(50) UNIQUE,
        price VARCHAR(50),
        typeofpages VARCHAR(100)
      );`
      const result = pool.query(generateTable);
      pool.end()
}
createTable();