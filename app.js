const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
mongoose.promise = global.promise;

mongoose.connect("url").then(()=>{
    console.log("connetced succesfully");
}).catch((err)=>{

        console.log(err);
});
const db = mongoose.connection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.get("/", (req, res)=>{


        res.send("working bro");

});

app.listen(3000, function(){

    console.log("listening on port 3000");

});
