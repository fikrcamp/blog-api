const mongoose = require('mongoose');

const commentSchema= mongoose.Schema({
    comment:{
        type: String,
        required:true
    }
 
})

// comment modal function
const commentModel= mongoose.model( "Comment" ,commentSchema)

// export  the commentModal
module.exports = commentModel