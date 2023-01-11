const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title:String,
    content:String,
})

const blogModel = mongoose.model('Blog',schema)

module.exports = blogModel