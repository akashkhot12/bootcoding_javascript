const {Pool,Client,Query}=require("pg");
const db = require("../Connections/app4");

const query = async(req,res)=>{
    const pool = new Pool(db.database);
    const result = pool.query(sql,(err,res)=>{
        if (err) {
            throw err
        }
        return result
    })
}

const createTable = async()=>{
    const pool= new Pool(db.database);
    const generateTable =`CREATE TABLE IF NOT EXISTS public.teacher (
        teacherID INT PRIMARY KEY,
        firstName VARCHAR(50) NOT NULL,
        lastName VARCHAR(50) NOT NULL,
        batch VARCHAR(50) UNIQUE,
        sallary VARCHAR(50),
        sunject VARCHAR(100)
      );`
      const result = pool.query(generateTable);
      pool.end();
}

createTable()