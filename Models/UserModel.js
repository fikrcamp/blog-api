const mongoose = require("mongoose")

const schema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        required:true
    }
})

const userModel = mongoose.model('User',schema)

module.exports = userModel