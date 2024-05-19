const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        maxLength: 40,
        trim: true,
    },  
    email :{
        type: String,
        required: true,
        trim: true,
    },
    contactNumber : {
        type:Number,
        required: true,
    },
    vehicleNumber : {
        type:String,
        required: true,
    },
    age: {
        type:Number,
        required: true,
    },
    address : {
        type:String,
        required: true,
        trim: true,
    },
    password : {
        type : String,
        required: true,
    },
    accountType: {
        type: String,
        required:true,
        enum : ["user","admin"]
    },
    token: {
        type: String,
    },
    resetPasswordExpiry: {
        type: Date,
    },
    
},
// // Add timestamps for when the document is created and last modified
{ timestamps: true }
);


module.exports = mongoose.model("Users",userSchema);