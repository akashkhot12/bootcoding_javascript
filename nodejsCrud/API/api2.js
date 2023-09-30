const express = require("express");
const app = express();
const router = express.Router();
const db = require("../service/service2");

router.post("/insert", async (req, res) => {
  let name = req.body.name;
  let address = req.body.address;
  let email = req.body.email;
  let phone = req.body.phone;

  let dbResponse = await db.insertService(name, address, email, phone);
  console.log("data inserted", dbResponse);
  req.status(200).json({ staus: 200, message: dbResponse });
});

