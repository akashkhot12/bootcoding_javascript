const { Pool, Client, Query } = require("pg");
const db = require("../Connections/app1");


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
    const generateTable =`CREATE TABLE IF NOT EXISTS public.fancybag (
        bagID INT PRIMARY KEY,
        bagname VARCHAR(50) NOT NULL,
        bagtype VARCHAR(50) UNIQUE,
        color VARCHAR(50),
        price VARCHAR(100)
      );`
      const result = pool.query(generateTable);
      pool.end()
}
// createTable()

const insertData = async(
    bagID,
    bagname,
    bagtype,
    color,
    price
)=>{
    const pool = new Pool(db.database);
    const insert = `insert into public.fancybag(bagID,bagname,bagtype,color,price)
    values('${bagID}','${bagname}','${bagtype}','${color}','${price}')`; 
    const result  = await pool.query(insert);
    let message = "included data"
    if (result.affectedRows) {
        message:message
    }
    pool.end();
    return result;
}

insertData(1,'skybag','college','black',3000)



module.exports={insertData}