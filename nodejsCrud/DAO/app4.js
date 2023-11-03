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
        subject VARCHAR(100)
      );`
      const result = pool.query(generateTable);
      pool.end();
}

createTable()

const insertData = async(
    teacherID,
    firstName,
    lastName,
    batch,
    sallary,
    subject
)=>{
    const pool = new Pool(db.database);
    const insert = `insert into public.teacher(teacherID,firstName,lastName,batch,sallary,subject)
    values('${teacherID}','${firstName}','${lastName}','${batch}','${sallary}','${subject}')`; 
    const result = await pool.query(insert);
    let message ="inserted data";
    if (result.affectedRows) {
        message:message
    }
    pool.end();
    if (result) {
        console.log("inserted data");
    }
    return result;
}

insertData(1,'laxman','hedaoo','morning',30000,'IT');




module.exports={insertData}