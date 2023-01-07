const mongoose = require('mongoose');

const userSchema= mongoose.Schema({
    firstName:{
        type: String,
        required:true
    },
    lastName:{
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    password:{
        type:String,
        default: "123456",
        min:6,
        max:12,
        required:true
    }
  
})

const userModel= mongoose.model( "user" ,userSchema)
module.exports =userModel