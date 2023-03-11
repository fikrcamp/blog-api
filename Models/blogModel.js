const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    Title:{
        type:String},
    Content:{
        type:String},
    user:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    }
}) 

const blogModel = mongoose.model('blog',blogSchema)
module.exports = blogModel