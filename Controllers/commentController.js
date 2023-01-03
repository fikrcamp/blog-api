exports.comments = (req,res)=>{
    res.status(200).json({message: "here are all the comments you requested"})
}

exports.createComment = (req,res)=>{
   
    res.status(200).json({message: "your comment is created successfully"})
}
exports.editComment = (req,res)=>{
    
    res.status(200).json({message: "you edited your comment"})
}
exports.deleteComment = (req,res)=>{
    
    res.status(200).json({message: "you deleted your comment"})
}