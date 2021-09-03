const mongoose = require('mongoose');

const reservation_schema = new mongoose.Schema({
    checkin:{
        type:Date,
        require: true,
    },

    checkout:{
        type:Date,
        require: true,
    },

    Reg_num:{
        type: String,
        require: true,
        unique: true,
    },

} , {timestamps:true});

module.exports = mongoose.model("reservations", reservation_schema);