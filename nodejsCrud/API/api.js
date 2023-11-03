const express = require("express");
const app = express();
const router = express.Router();
const service = require("../service/service");

router.post("/insert-data", async (req, res) => {
  let EmployeeID = req.body.EmployeeID;
  let FirstName = req.body.FirstName;
  let LastName = req.body.LastName;
  let Email = req.body.Email;
  let AddressLine = req.body.AddressLine;
  let City = req.body.City;

  let dbResponse = await service.insertService(
    EmployeeID,
    FirstName,
    LastName,
    Email,
    AddressLine,
    City
  );
  console.log(dbResponse);
  res.status(200).json({ status: "Success", message: dbResponse });
});

module.exports = router;

// get

router.get("/showData/:id", async (req, res) => {
  let id = req.params.id;
  let dbResponse = await service.getService(id);
  // console.log(dbResponse);
  // res.status(200).json(dbResponse);
  if (dbResponse) {
    res.status(200).json(dbResponse)
  }
  else{
    res.status(404)
    console.log("something wrong");
  }
});

router.get("/showDataEmail/:Email",async(req,res)=>{
  let Email = req.params.Email;
  let dbResponse = await service.getServiceEmail(Email);
  if (dbResponse) {
    res.status(200).json(dbResponse)
  }
  res.status(400)
  console.log("something wrong");
});

//   update
router.put("/update-data/:EmployeeID", async (req, res) => {
  let EmployeeID = req.params.EmployeeID;
  let FirstName = req.body.FirstName;
  let LastName = req.body.LastName;
  let Email = req.body.Email;
  let AddressLine = req.body.AddressLine;
  let City = req.body.City;

  let dbResponse = await service.updateService(
    EmployeeID,
    FirstName,
    LastName,
    Email,
    AddressLine,
    City
  );
  console.log(dbResponse);
  res.status(200).json({ status: "Success", message: dbResponse });
});


//   delete
router.delete("/delete/:id", async (req, res) => {
  let id = req.params.id;
  let dbResponse = await service.deleteService(id);
  console.log(dbResponse);
  res.status(200).json(dbResponse);
});

module.exports = router;





