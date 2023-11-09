const {Pool,Query,Client}=require("pg");
const db = require("../Connections/chetna");

const query = async(req,res)=>{
    const pool = new Pool(db.database);
    const qry = pool.query(sql,(err,res)=>{
        if(err){
            throw err
        }
        return qry;
    })
}

const insertData = async(
    studentid,
    firstname,
    lastname,
    email,
    addressline,
    city
    )=>{
    const pool = new Pool(db.database);
    const insert = `insert into public.student(studentid,firstname,lastname,email,addressline,city)values(${studentid},'${firstname}','${lastname}','${email}','${addressline}','${city}')`;
    const result  = await pool.query(insert);
    let message = "uploded succesfully"
    if (result.affectedrows) {
        message:message
    }
    pool.end();
    console.log("inserted succesfully");
    return result
}

// insertData(3,"chetna","khot","chetna@gmail.com","bhandara","bhanadra");

module.exports ={insertData}