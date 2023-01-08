
const comment = require("../Models/commentModel")
exports.comments = async(req,res)=>{
 try { 
    await comment.find({});
   res.status(200).json({message: "here are all the comments"})
} catch{
    res.status(400).json({message: "we could not find the comments"})
}
}

exports.createComment = async(req,res)=>{
     try { 
    await comment.create(req.body);
   res.status(200).json({message: "your comment is created"})
} catch{
    res.status(400).json({message: "your comment could not be created" })
    }   
   
   
}
exports.editComment = async(req,res)=>{
     ID = req.params.id
   comment.findByIdAndUpdate(ID,{comment:req.body.comment},(err)=>{
        if(err){
            res.status(400).json({message: "your comment could not be edited" })
        }
    
    res.status(200).json({message: "your comment is edited"})
    
    }
  )}
exports.deleteComment = async(req,res)=>{
   Id = req.params.id
    try{ await comment.findByIdAndDelete(Id)
    res.status(200).json({message: "your comment is deleted"})
}catch{
     res.status(400).json({message: "your comment could not be deleted" })
}
}