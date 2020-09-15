const express=require("express");

const router=express.Router();
var bodyParser = require('body-parser'); 

var {customerInfoArray}=require('../common/data');

router.get("/",function(req,res){
    res.status(200).json(customerInfoArray);
});

module.exports = router;