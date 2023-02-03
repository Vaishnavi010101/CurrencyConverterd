const mongoose = require("mongoose")
const UserSchema=new mongoose.Schema({
    name:String,
    phone: Number,
    currency:[
        {
         from:String,
         to:String,
         amount:Number,
         result:Number,
        
        }
    ],
    parameter:Number 
})

const User=mongoose.model("User",UserSchema)
module.exports = User;