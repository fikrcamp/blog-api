const Comment = require("../Models/commentModel")


const commentList = async(req, res) => {
    try{
        //get all comments
        const Comments = await Comment.find({}).populate("user").populate("blog")
        res.status(200).json({Comments})
    }catch{
        res.status(400).json({message: "Error, Try again"})
    }
    
}

const newComment = async(req, res) => {
    try{
        //create a new comment
        const comment = await Comment.create(req.body)
        res.status(200).json({comment})
    }catch{
        res.status(400).json({message: "Error, Try again"})
    }
    
}

const editComment = async(req, res) => {
    try{
        //find comment by id and update it
        const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json({comment})
    }catch{
        res.status(400).json({message: "Error, Try again"})
    }
    
}

const deleteComment = async(req, res) => {
    try{
        //find comment by id and delete it
        await Comment.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "comment is deleted"})
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