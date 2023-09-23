const express =  require ('express');
const app= express();
const router = express.Router();
const dataservice  = require('../service/get.service')


router.get('userData',async(req,res)=>{
    let database = await dataservice.getService();
    console.log(database);
    res.status(200).json(database)
});

module.exports = router