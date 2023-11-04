const express = require("express");
const app= express();
const router = express.Router();
const service = require("../service/app1");


router.post("insertData",async(req,res)=>{
    bagID,
    bagname,
    bagtype,
    color,
    price

    let dbResponse = await service.insertService(
        bagID,
        bagname,
        bagtype,
        color,
        price
    ) 
    console.log(dbResponse);
    res.status(200).json({status:"success",message:dbResponse})
})

module.exports=router