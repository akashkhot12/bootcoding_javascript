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
    const genTable = `CREATE TABLE IF NOT EXIST public.Employee  
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

const insertData = async(EmployeeID,FirstName,LastName,Email,AddressLine,City)=>{
    const pool = new Pool(db.database);
    const insert = `insert into public.Employee(EmployeeID,FirstName,LastName,Email,AddressLine,City) values('${EmployeeID}','${FirstName}','${LastName}','${Email}','${AddressLine}','${City}')`;
    const res = await pool.query(insert);
    let message = "data is update";
    if (res.affectedRows) {
        message :message;
    }
    pool.end();
    return res;
}

insertData(1,'vansh','belekar','vanshbe@gmail.com','khat road bhandara','bhandara')
