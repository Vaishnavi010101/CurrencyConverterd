const mongoose = require("mongoose")
const userSchema=new mongoose.Schema({
    name:String,
    phone: {
        type:Number,
        unique:true
                
            },
    //  groups:[
    //     {
    //         name:String,
    //         url:[{type:String}]
    //     }
    //  ]
})

const User=mongoose.model("User",userSchema)
module.exports = User