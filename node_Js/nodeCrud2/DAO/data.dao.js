const {Pool,Client,Query} = require('pg')
const path = require('../database/connection.db');

const getData = async()=>{
const pool = new Pool(path.databse);
const querry = `select * from public.person`
const response = pool.query(querry);
if (response.affectedRows) {
    console.log(response.rows);
}
pool.end();
console.log(response.rows);
return response.rows;
}

getData();

module.exports = {getData}