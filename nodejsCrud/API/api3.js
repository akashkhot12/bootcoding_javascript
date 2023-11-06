const express = require("express");
const app = express();
const router = express.Router();
const service = require("../service/service3");

router.post("/insertData", async (req, res) => {
  let StudentID = req.body.StudentID;
  let FirstName = req.body.FirstName;
  let LastName = req.body.LastName;
  let Email = req.body.Email;
  let AddressLine = req.body.AddressLine;
  let City = req.body.City;

  let dbResponse = await service.insertService(
    StudentID,
    FirstName,
    LastName,
    Email,
    AddressLine,
    City
  );
  console.log(dbResponse);
  res.status(200).json({status:"success",message:dbResponse})
});

router.get("/showdata/:id",async(req,res)=>{
  let StudentID = req.parse.StudentID;
  let dbResponse = await service.getService(StudentID);
  if(dbResponse){
    res.status(200).json(dbResponse)
  }
  else{
    res.status(400)
    console.log("data is not show");
  }
})

module.exports= router;
