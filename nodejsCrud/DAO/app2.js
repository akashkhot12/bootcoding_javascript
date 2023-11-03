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
// createTable();

const insertData = async(
    bookID,
    bookname,
    pages,
    type,
    price,
    typeofpages
)=>{
    const pool = new Pool(db.database);
    const insert = `insert into public.bookstall(bookID,bookname,pages,type,price,typeofpages)
    values('${bookID}','${bookname}','${pages}','${type}','${price}','${typeofpages}')`; 
    const result = await pool.query(insert);
    let message = "uplode the data"
    if (result.affectedRows) {
        message:message;
    }
    pool.end();
    if (result) {
        console.log("your data is uploded");
    }
    return result;
}

insertData(1,'classmate',200,'plain',70,'single line');




module.exports={insertData}