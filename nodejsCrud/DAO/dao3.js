const{Pool,Client,Query}=require("pg");
const db = require("../Connections/connection3");

const query = async(req,res)=>{
    const pool = new Pool(db.database);
    const result = pool.query(sql,(err,res)=>{
        if (err) {
            throw err
        }
        return result
    });
};

// create a table 
const createTable = async () => {
    const pool = new Pool(db.database);
    const generateTable = `CREATE TABLE IF NOT EXISTS public.mobilehub (
          mobID INT PRIMARY KEY,
          title VARCHAR(50) NOT NULL,
          summery VARCHAR(50) NOT NULL,
          model VARCHAR(50) UNIQUE,
          price VARCHAR(50),
          brand VARCHAR(100)
        );`;
    const result = pool.query(generateTable);
    pool.end();
  };

//   createTable()

