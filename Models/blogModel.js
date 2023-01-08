const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    Title:String,
    Content:String
}) 

const blogModel = mongoose.model('blog',blogSchema)
module.exports = blogModel