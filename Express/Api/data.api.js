const express = require("express");
const app = express();
const router = express.Router();
const dataService = require("../service/data.service");

router.post("/insert-data", async (req, res) => {
  let id = req.body.id;
  let name = req.body.name;
  let age = req.body.age;
  let address = req.body.address;
  let salary = req.body.salary;

  let dbResponse = await dataService.insertService(
    id,
    name,
    age,
    address,
    salary
  );
  console.log(dbResponse);
  res.status(200).json({ status: "Success", message: dbResponse });
});

module.exports = router;
