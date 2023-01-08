const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        min:4
    },
    phone:{
        type:Number,
        max:12
    }
})

const userModel = mongoose.model('user',userSchema)

module.exports = userModel