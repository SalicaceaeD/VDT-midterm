const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userModel = require('./userModel');

const app = express();
app.use(cors());
app.use(express.json());

//read
//http://localhost:10000/
app.get("/", async(req, res) => {
    const data = await userModel.find({})
    res.json({success:true, data : data})
})

//add new data
app.post("/create", async(req, res) => {
    console.log(req.body)
    const data = new userModel(req.body)
    await data.save()
    res.send({success:true, message: "data save successfully", data : data})
});

//update data
app.put("/update", async(req, res) => {
    console.log(req.body)
    const {_id,...rest} = req.body
    console.log(rest)
    const data = await userModel.updateOne({_id : _id}, rest)
    res.send({success:true, message: "data update successfully", data : data})
});

//delete data
app.delete("/delete/:id", async(req, res) => {
    const id = req.params.id
    const data = await userModel.deleteOne({_id : id})
    console.log(data);
    res.send({success:true, message: "data delete successfully", data : data})
});

mongoose.connect("mongodb://localhost:27017/crudoperation")
.then(()=>console.log("Connected to MongoDB"))
.catch((err)=>console.log(err));

module.exports = app;