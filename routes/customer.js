const express=require("express");

const router=express.Router();
var bodyParser = require('body-parser'); 

var {customerArray}=require('../common/data');
var {roomArray}=require('../common/data');
var {roomInfoArray}=require('../common/data');
var {customerInfoArray}=require('../common/data');
const e = require("express");
/*var customerArray=[];
var roomArray=[];
var roomInfoArray=[];
var customerInfoArray=[];*/

router.get("/",function(req,res){
    res.status(200).json(customerArray);
});

router.post("/",function(req,res){
    let roomDetail=roomArray.find((room)=> room.id===req.body.room_id);
    let roomIndex=roomArray.indexOf(roomDetail);

    if(roomDetail.status===false)
    {
        customerArray.push({
            customer_id : customerArray.length+1,
            customer_name : req.body.name,
            date : req.body.date,
            start_time : req.body.start_time,
            end_time : req.body.end_time,
            room_id : req.body.room_id
        });
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
    roomArray[roomIndex].status=true;
    res.status(200).json({
        message:"customer created..."
    });
    }
    else
    {
        res.status(200).json({
        message:"Error! this room is already booked..."
        });
    }
});

module.exports = router;

/*
{
    "name" : "Cust-01",
    "date" : "15-09-2020",
    "start_time" : "08:00",
    "end_time" : "19:00",
    "room_id" : 2
}
*/