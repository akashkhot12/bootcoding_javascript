const express = require("express");
const app = express();
const router = express.Router();
const service = require("../service/app4")

router.post("/insertData",async(req,res)=>{
    teacherID,
    firstName,
    lastName,
    batch,
    sallary,
    subject

    let dbResponse = await service.insertService(
        teacherID,
        firstName,
        lastName,
        batch,
        sallary,
        subject
    )

    console.log(dbResponse);
    
})

module.exports = router;

