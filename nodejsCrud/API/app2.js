const express = require("express");
const app = express();
const router = express.Router();
const service = require("../service/app2");

router.post("/insertData",async(req,res)=>{
    bookID,
    bookname,
    pages,
    type,
    price,
    typeofpages

    let dbResponse = await service.insertService(
        bookID,
        bookname,
        pages,
        type,
        price,
        typeofpages
    )
    console.log(dbResponse);
    res.status(200).json({staus:"success",message:dbResponse})
})

module.exports = router