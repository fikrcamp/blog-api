const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
    comments: String,
    date: { type: Date, default: Date.now },
    user:{
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
    blog:{
        type: mongoose.Types.ObjectId,
        ref: "blog"
    }
})

const commentModel = mongoose.model("comment", commentSchema);

module.exports = commentModel