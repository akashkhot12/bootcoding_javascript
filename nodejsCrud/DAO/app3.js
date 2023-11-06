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

// createTable()

const insertData = async(
    gadgetID,
    gadgetname,
    object,
    type,
    model
)=>{
    const pool = new Pool(db.database);
    const insert =`insert into public.gadgetstall(gadgetID,gadgetname,object,type,model)
    values('${gadgetID}','${gadgetname}','${object}','${type}','${model}')`; 
    const result = await pool.query(insert);
    let message="insert data";
    if (result.affectedRows) {
        message:message;
    }
    pool.end();
    if (result) {
        console.log("insert data");
    }
    return result
}

// insertData(1,'remote','plastic','electrical','TV');


const getData=async(id)=>{
 const pool = new Pool(db.database)
 const qry = ` select * from public.gadgetstall WHERE gadgetID = ${id}`;
 const result = await pool.query(qry);
 let message ="show data ";
 if (result.affectedRows) {
    message:result
 }
 pool.end();
 console.log(result.rows);
 return result.rows;
}
getData(1)



module.exports={insertData}