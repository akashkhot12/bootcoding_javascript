const {Pool,Client,Query} = require('pg');
const db = require('../operation1/connections');

const query = async(req,res)=>{
    const pool = new Pool(db.data);
    const [result] = pool.query(sql,(err,res)=>{
        if(err){
            throw err;
        }
        return result;
    })
}

const genTable = async()=>{
    const pool =new Pool(db.data);
    const table = `CREATE TABLE IF NOT EXISTS Public.Mania (
        Id 	INT PRIMARY KEY,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        gender CHAR(1),
        birthdate DATE,
        email_id VARCHAR(100) UNIQUE,
        country_of_birth VARCHAR(50)
    );`

    const result = pool.query(table);
    pool.end();
}

genTable();


