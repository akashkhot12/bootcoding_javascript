const express = require("express");
const data  = require("../DAO/chetna");

async function insertService(studentid,firstname,lastname,email,addressline,city){
    return await data.insertData(studentid,firstname,lastname,email,addressline,city)
}

// insertService(4,"john","dma","gn@getMaxListeners.com","newyork","neywonhnfn")

module.exports = {insertService}