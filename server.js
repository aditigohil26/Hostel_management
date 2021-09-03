if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const passport = require('passport'),
      LocalStrategy = require('passport-local'),
      passportLocalMongoose = require('passport-local-mongoose'),
      User = require('./models/users')
const router = express.Router()

// User Route (Login)
const User = require("./models/users")


// Rooms Route
const Rooms = require("./models/rooms")


// Reservation Route
const Reservation = require("./models/reservation")


const mongoose = require('mongoose')
const { appendFile } = require('fs')
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true, useUnifiedTopology: true
})
const database = mongoose.connection
database.on('error',error=>console.error(error))
database.once('open',()=>console.log('Connected to Mongoose'))

// Listening

app.listen(process.env.PORT || 8000, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Server Running at port 8000")
    }
})

