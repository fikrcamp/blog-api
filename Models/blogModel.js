const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    title:String,
    content:String,
    author:String,

})

const blogModel = mongoose.model("blog", blogSchema);

module.exports = blogModel