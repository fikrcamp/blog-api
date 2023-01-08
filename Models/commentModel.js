const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
    Comment:{
        type:String,
        required:true
    }
})

const commentModel = mongoose.model('comment',commentSchema)
module.exports = commentModel