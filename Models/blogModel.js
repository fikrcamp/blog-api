const mongoose = require('mongoose');

const blogSchema= mongoose.Schema({
    tittle:{
        type: String,
        required:true
    },
    content:{
        type: String,
        required:true
    } 
  
})

// blog modal function
const blogModel= mongoose.model( "blog" ,blogSchema)

// exports the blogModal
module.exports = blogModel