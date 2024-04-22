const express = require("express");
const app = new express();
const mongoose = require("mongoose");
const hpp = require("hpp");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const cookieParser = require('cookie-parser');
const cors = require("cors");
const path = require('path');
const router = require("./src/route/api")
const dotenv = require("dotenv");
dotenv.config({path:"./.env"})


// middlewares

app.use(cors())
app.use(cookieParser());
app.use(hpp());
app.use(helmet());
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({extended:true}));

// Database Connection

let URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hz27rcf.mongodb.net/CRUD18`;
let OPTION = {user:"",pass:"",autoIndex:true};
mongoose.connect(URI,OPTION)
    .then((res)=>{
        console.log("Database Connected")
    })
    .catch((e)=>{
        console.log(e)
    })


app.set("etag",false);
app.use("/api",router);


module.exports = app;
