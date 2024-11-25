const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    Email_Address:{
        type: String,
        required: true
    },
    DateOfBIrth:{
        type: String,
        required: true
    },
    Address:{
        type: String,
        required: true
    },
    Bio:{
        type: String,
        required: true
    }

})

const User = new mongoose.model( "class_work", userSchema)

module.exports = User;