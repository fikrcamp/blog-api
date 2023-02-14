const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    secondName:{
        type:String,
        required:true
    },
    file:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    },
    location:{
        type:String,
    },
    bio:{
        type:String,
    },
    work:{
        type:String,
    }
})


const userModel = mongoose.model("user", userSchema)

module.exports = userModel
