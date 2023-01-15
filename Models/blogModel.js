const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    title:String,
    content:String,
    user:{
        type: mongoose.Types.ObjectId,
        ref: "user"
    }
})

const blogModel = mongoose.model("blog", blogSchema);

module.exports = blogModel