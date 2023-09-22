const express = require("express");
const app = express();
const router  = express.Router();
const dataservice = require("../service/api.service")

router.get('best',async(req,res)=>{
    let dbResponse = await dataservice.getService();
    console.log(dbResponse);
    res.status(200).json(dbResponse)
})

module.exports = router;