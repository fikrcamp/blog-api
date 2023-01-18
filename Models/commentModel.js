const mongoose = require('mongoose');

const commentSchema= mongoose.Schema({
    comment:{
        type: String,
        required:true
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref: "user"
    },
    blog:{
        type:mongoose.Types.ObjectId ,
        ref: "blog"
    }
 
})

// comment modal function
const commentModel= mongoose.model( "Comment" ,commentSchema)

// export  the commentModal
module.exports = commentModel