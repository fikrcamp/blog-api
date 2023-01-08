const Comment = require("../Models/commentModel");

  //  
exports.getComment = async(req, res) => {
  await Comment.find().then((comments)=>{
    res.send({comments})
  }).catch(()=>{
    res.status(400).json({ message: "oops we have error" });
  })
}
  //  
exports.createComment = async(req, res) => {
  try{
    await Comment.create(req.body)
    res.status(200).json({message:"You have created comment"})

}catch{
    res.status(400).json({message:"Oops we have error!"})
}
  };
  
  // 
exports.editComment = async(req, res) => {
   
    try{
      await Comment.updateOne(req.body)
      res.status(200).json({ message: "you have edited  your  comment" });
    }catch{
      res.status(400).json({message:"Oops we have error!"})
    }
    
  };
  
  //
exports.deleteComment = async(req, res) => {
    
    try{
      await Comment.deleteOne(req.body)
      res.status(200).json({ message: "you have deleted  your comment"});
    }catch{
      res.status(400).json({message:"Oops we have error!"})
    }
      
    
    
  };
  
  