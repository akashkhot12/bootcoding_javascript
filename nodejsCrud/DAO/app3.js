const{Pool,Client,Query}=require("pg");
const db = require("../Connections/app3");

const query = async(req,res)=>{
    const pool = new Pool(db.database);
    const result = pool.query(sql,(err,res)=>{
        if (err) {
            throw err
        }
        return result;
    })
}

const createTable = async()=>{
    const pool = new Pool(db.database);
    const generateTable = `CREATE TABLE IF NOT EXISTS public.gadgetstall (
        gadgetID INT PRIMARY KEY,
        gadgetname VARCHAR(50) NOT NULL,
        object VARCHAR(50) NOT NULL,
        type VARCHAR(50) UNIQUE,
        model VARCHAR(50)
      );`
      const result = pool.query(generateTable);
      pool.end();
}

createTable()