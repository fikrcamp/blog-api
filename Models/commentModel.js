const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
})

const commentModel = mongoose.model("comment", commentSchema);

module.exports = commentModel