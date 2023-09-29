const{Pool,Client,Query} = require("pg");
const db  =  require("../Connections/connection")

const query = async(req,res)=>{
    const pool = new Pool(db.database);
    const result = pool.query(sql,(err,res)=>{
        if(err){
            throw err;
        }
        return result;
    })
};

const createTable = async()=>{
    const pool = new Pool(db.database);
    const genTable = `CREATE TABLE IF NOT EXIST Employee  
    (  
    EmployeeID int PRIMARY KEY,  
    FirstName varchar(255),  
    LastName varchar(255),  
    Email varchar(255),  
    AddressLine varchar(255),  
    City varchar(255)  
    )`;
    const result = pool.query(genTable);
    pool.end();
}

createTable();
