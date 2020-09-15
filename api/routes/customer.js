const express=require("express");

const router=express.Router();
var bodyParser = require('body-parser'); 

var {customerArray}=require('../common/data');
var {roomArray}=require('../common/data');
var {roomInfoArray}=require('../common/data');
var {customerInfoArray}=require('../common/data');

router.get("/",function(req,res){
    res.status(200).json(customerArray);
});

router.post("/",function(req,res){
    customerArray.push({
        customer_id : teacherArray.length+1,
        customer_name : req.body.name,
        date : req.body.date,
        start_time : req.body.start_time,
        end_time : req.body.end_time,
        room_id : req.body.room_id
    });
    
    let roomDetail=roomArray.find((room)=> room.id===req.body.room_id);

    customerInfoArray.push({
        customer_name : req.body.name,
        Room_name : roomDetail.room_name,
        date : req.body.date,
        start_time : req.body.start_time,
        end_time : req.body.end_time
    });
    roomInfoArray.push({
        Room_name : roomDetail.room_name,
        customer_name : req.body.name,
        date : req.body.date,
        start_time : req.body.start_time,
        end_time : req.body.end_time
    });
    res.status(200).json({
        message:"customer created..."
    });
});

module.exports = router;