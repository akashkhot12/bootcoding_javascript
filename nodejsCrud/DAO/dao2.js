const {Pool,Client,Query} = require("pg")
const db  =  require("../Connections/connection2")

const  query = async(req,res)=>{
    const pool = new Pool(db.postg);
    const result  = pool.query(sql,(err,res)=>{
        if(err){
            throw err
        }
        return result;
    }) 
}
