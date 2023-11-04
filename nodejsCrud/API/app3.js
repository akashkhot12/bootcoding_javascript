const express = require("express");
const app = express();
const router = express.Router();
const service = require("../service/app3");


router.post("/insertData",async(req,res)=>{
    gadgetID,
    gadgetname,
    object,
    type,
    model

    let dbResponse = await service.insertService(
    gadgetID,
    gadgetname,
    object,
    type,
    model
    )
    console.log(dbResponse);
    res.status(200).json({staus:"success",message:dbResponse})
})

module.exports=router;
