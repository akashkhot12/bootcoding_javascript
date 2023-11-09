const express = require("express");
const app  = express();
const router = express.Router();
const service = require("../service/chetna")

router.post("/insertData",async(req,res)=>{
    let studentid = req.body.studentid;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let addressline = req.body.addressline;
    let city = req.body.city;

    let dbResponse = await service.insertService(studentid,firstname,lastname,email,addressline,city);
    res.status(200).json(
        {
            status:"success",
            message:"insert data succesfully"
        }
    )
})
module.exports = router;