const{Pool,Client,Query}=require("pg");
const db = require("../connections/database");

const getData = async()=>{
    const pool = new Pool(db.dbcongif);
    const qr = `select * from public.person`
    const res = await pool.query(qr);
    if (res.affectedRows) {
        console.log(res.rows);
    }
    pool.end();
    console.log(res.rows);
    return res.rows;
}

getData();

module.exports = { getData}