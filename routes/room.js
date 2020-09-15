const express=require("express");

const router=express.Router();
var bodyParser = require('body-parser'); 

var {roomArray}=require('../common/data');
//var roomArray=[];

router.get("/",function(req,res){
    res.status(200).json(roomArray);
});

router.post("/",function(req,res){
    roomArray.push({
        id : roomArray.length+1,
        room_name : req.body.name,
        num_of_seats : req.body.num_of_seats,
        amenities : req.body.amenities,
        price : req.body.price
    });
    res.status(200).json({
        message:"room created..."
    });
});

module.exports = router;

/*
{
    "room_name" : "Master-Suite",
    "num_of_seats" : 10,
    "amenities" : ["AC","tv","wi-fi","fan"],
    "price" : 8000
}
*/ 