const Comment = require("../Models/commentModel");

  //  
exports.getComment = async(req, res) => {
  const {id} = req.params
  await Comment.find({blogs:id}).populate("User").then((comments)=>{
    res.send({comments})
  }).catch((e)=>{
    res.status(400).json({ message: "oops we have error" });
    console.log(e.message);
  })
}
  //  
exports.createComment = async(req, res) => {
  // 
  try{
    req.body.User = req.user.id
    // console.log(req.user)
    
    // console.log(req.body.blog)
    await Comment.create(req.body)
    res.status(200).json({message:"You have created comment"})

}catch(e){
    res.status(400).json({message:"Oops we have error!"})
} 
console.log(e.message);
  };
  
  // 

// exports.userblog = (req,res)=>{
//   try{
//     res.status(200).json({message:"here user blogs"})
//   }catch(e){
//     res.status(401).json({message:"couldn't find blogs"})
//   }
// }

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
  
  