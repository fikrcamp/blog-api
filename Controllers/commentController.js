exports.comments = (req,res)=>{
    res.status(200).json({message:"Here are all the comment"})
}

exports.saveComment = (req,res)=>{
    res.status(200).json({message:"You have created a comment"})
}

exports.editComment = (req,res)=>{
    res.status(200).json({message:"You have edited the comment"})
}

exports.deleteComment = (req,res)=>{
    res.status(200).json({message:"You have deleted the comment"})
}