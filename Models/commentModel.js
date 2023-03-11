const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
    Comment:{
        type:String,
        required:true
    },
    User:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    },
    blog:{
        type: mongoose.Types.ObjectId,
        ref:"blog"
    }
})

const commentModel = mongoose.model('comment',commentSchema)
module.exports = commentModel