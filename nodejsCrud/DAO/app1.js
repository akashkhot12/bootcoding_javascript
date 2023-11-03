const { Pool, Client, Query } = require("pg");
const db = require("../Connections/app1");


const query = async(res,res)=>{
    const pool = new Pool(db.database);
    const result = pool.query(sql,(err,res)=>{
        if (err) {
            throw err;
        }
        return result;
    })
}