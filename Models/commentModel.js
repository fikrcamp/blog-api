const mongoose = require("mongoose")

const schema = mongoose.Schema({
    comment:String
})

const commentModel = mongoose.model('Comment',schema)

module.exports = commentModel