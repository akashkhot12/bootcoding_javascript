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


const insertData = async (
    mobID,
    title,
    summery,
    model,
    price,
    brand
  ) => {
    const pool = new Pool(db.database);
    const insert = `insert into public.mobilehub(mobID,title,summery,model,price,brand)
        values('${mobID}','${title}','${summery}','${model}','${price}','${brand}')`;
  
    const res = await pool.query(insert);
    let message = "data is updated";
    if (res.affectedRows) {
      message: message;
    }
    pool.end();
    return res;
  };

  insertData(1,'samsung s20 ultra','this is smartphone','7th gen',98000,'samsung');