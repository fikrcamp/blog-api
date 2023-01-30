const e = require("express")
const Comment = require("../Models/commnetModels")

//get a comment 
exports.comments = async(req,res)=>{
    try{
        const comments = await Comment.find({}).populate("user").populate("blog")
        res.status(200).json({comments})
    }catch(e){
        res.status(400).json({message:"Oops theres an error fetching the comments"})
    }
}
    // save a new comment
exports.saveComment = async(req,res)=>{
    try{
        console.log(e)
        await Comment.create(req.body)
        res.status(200).json({message:"You have created a comment"})
    }catch(e){
        res.status(400).json({message:"Oops theres an error saving the comments"})
    }  
}
    //edit a comment
exports.editComment = async(req,res)=>{
    try{
        const {id} = req.params
        await Comment.findByIdAndUpdate(id,req.body)
        res.status(200).json({message:"You have edited the comment"})
    }catch(e){
        res.status(400).json({message:"Oops theres an error saving the comments"})
    }
}
    // delete a comment 
exports.deleteComment = async(req,res)=>{
    try{
        const {id} = req.params
        await Comment.findByIdAndDelete(id)
        res.status(200).json({message:"You have deleted the comment"})
    }catch(e){
        res.status(400).json({message:"Oops theres an error saving the comments"})
    }
}