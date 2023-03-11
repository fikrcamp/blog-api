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
    },
    bio:{
        type:String
    },
    location:{
        type:String
    },
    work:{
        type:String
    },
    image:{
        type:String
    } ,
    image:{
        public_id: {
            type: String,
           
        },
        url: {
            type: String,
            
        }
    }

})

const userModel = mongoose.model('user',userSchema)

module.exports = userModel