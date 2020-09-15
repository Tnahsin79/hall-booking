const express=require("express");
const app=express();

const roomRoutes=require("./api/routes/room");
const customerRoutes=require("./api/routes/customer");

app.use("/room",roomRoutes);
app.use("/customer",customerRoutes);

module.exports=app;