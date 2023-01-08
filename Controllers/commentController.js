const Comment = require("../Models/commentModel")


const commentList = async(req, res) => {
    try{
        //get all comments
        const allComments = await Comment.find()
        res.status(200).json(allComments)
    }catch{
        res.status(400).json({message: "Error, Try again"})
    }
    
}

const newComment = async(req, res) => {
    try{
        //create a new comment
        await Comment.create({body: req.body.body, date: new Date()})
        res.status(200).json({message: "You've left a comment"})
    }catch{
        res.status(400).json({message: "Error, Try again"})
    }
    
}

const editComment = async(req, res) => {
    try{
        //find comment by id and update it
        await Comment.findByIdAndUpdate(req.params.id, {comments: [{body:req.body.body, date: new Date()}]})
        res.status(200).json({message: `comment ${_id} was edited` })
    }catch{
        res.status(400).json({message: "Error, Try again"})
    }
    
}

const deleteComment = async(req, res) => {
    try{
        //find comment by id and delete it
        await Comment.findByIdAndDelete(req.params.id)
        res.status(200).json({message: `Your comment was deleted`})
    }catch{
        res.status(400).json({message: "Error, Try again"})
    }
    
}

module.exports = {
    commentList,
    newComment,
    editComment,
    deleteComment,
}