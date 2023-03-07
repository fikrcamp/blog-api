const mongoose = require('mongoose');

const blogSchema= mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    content:{
        type: String,
        required:true
    } ,
    user:{
        type: mongoose.Types.ObjectId ,
        ref: "user"  
    }
  
})

// blog modal function
const blogModel= mongoose.model( "blog" ,blogSchema)

// exports the blogModal
module.exports = blogModel