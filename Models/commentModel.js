const mongoose = require("mongoose")

const schema = mongoose.Schema({
    comment:String,

    user:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    blog:{
        type:mongoose.Types.ObjectId,
        ref:"Blog"
    }
})

const commentModel = mongoose.model('Comment',schema)

module.exports = commentModel