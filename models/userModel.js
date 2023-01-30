const mongoose= require("mongoose")

const userSchema=mongoose.Schema({

    firstName: {
            type:String,
            required:true
            },
    secondName :{
            type:String,
            required: true
    },
    email:{
          type:String,
          required:true
        },

    password:{
        type:String,
        required:true,
    }

})
const userModel=mongoose.model('User',userSchema)
module.exports=userModel