const express = require("express");
const app=express();
const router  = express.Router();
const dataService = require("../service/data.service");

router.post("/insert-data", async (req, res) => {
    let id = req.body.id;
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let gender = req.body.gender;
    let birthdate = req.body.birthdate;
    let email_id = req.body.email_id;
    let country_of_birth = req.body.country_of_birth;
    
  let dbResponse = await dataService.insertService(
    id,
    first_name,
    last_name,
    gender,
    birthdate,
    email_id,
    country_of_birth
  );
  console.log(dbResponse);
  res.status(200).json({ status: "Success", message: dbResponse });
});

router.get('/getdata',async(req,res)=>{
    let id =  req.params.id;
  
  
    let dbResponse = await dataService.getService();
    console.log(dbResponse);
    res.status(200).json(dbResponse)
  })

module.exports=router
