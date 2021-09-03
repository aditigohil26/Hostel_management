const mongoose = require('mongoose');

const room_schema = new mongoose.Schema({
    type:{
        type: String,
        require: true,
    },

    room_no:{
        type: Number,
        require: true,
        unique: true,
    },

    food:{
        type: String,
        require: true,
    },

    occupancy:{
        type: Number,
        require: true,
        min:1,
        max:4,
    },

    availability:{
        type: Boolean,
        defaultValue: true,
    },

} , {timestamps:true});

module.exports = mongoose.model("rooms", room_schema);