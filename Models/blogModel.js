const express = require("express")
const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    tags:{
        type: [String],
        required: true
    },
    file:{
        type:String
    },
    content:{
        type: String,
        required:true
    },
    date: { type: Date, default: Date.now },
    user:{
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
})

const blogModel = mongoose.model("blog", blogSchema);

module.exports = blogModel