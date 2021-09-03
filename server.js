// if (process.env.NODE_ENV !== 'production'){
//     require('dotenv').config()
// }

const dotenv = require('dotenv');
dotenv.config();

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const passport = require('passport'),
      LocalStrategy = require('passport-local'),
      passportLocalMongoose = require('passport-local-mongoose'),
      User = require('./models/users')
const router = express.Router()

// User Route (Login)

// Rooms Route
const Rooms = require("./models/rooms")


const mongoose = require('mongoose');

const { appendFile } = require('fs');
const { env } = require('process');
mongoose
    .connect(process.env.DATABASE_URL,{
    useNewUrlParser: true, useUnifiedTopology: true
})
 .then(()=>{
     console.log("mongo connected!");
 })

app.listen(process.env.PORT || 8000, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Server Running at port 8000")
    }
});