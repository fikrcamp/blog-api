const Comment = require('../Models/commentModel');
//  Get list of comments for a certain blog
const getComment = async(req, res) => {
  try{
    const {id} =req.params
    const comments =   await Comment.find({blog:id}).populate("blog").populate("user")
    res.send({comments})
  }catch(e){
    res.status(400).json({ message: "Error! can't fetch all the comment" });
  
  }

};

//  User to leave a comment on a certain blog
const createComment = async(req, res) => {
  req.body.user= req.user.id ;
   
  try{
  // console.log(req.body.user);
    await Comment.create(req.body)
    res.status(200).json({ message: "Your comment is created" });
   
  }catch{
    res.status(401).json({ message: "Oops! ,Your comment is not being created " });
   
  }
};
// User to edit comment by ID
const editComment = async(req, res) => {
 await Comment.findByIdAndUpdate(req.params.id ,req.body ).then((comments)=>{
    res.status(200).json({comments ,editedMessage:"your comment is updated"});
  }).catch(()=>{
    res.status(400).json({ message: "Error! can't update your comment" });
  })
 
};
// User to delete comment by ID
const deleteComment = async(req, res) => {
  await Comment.findByIdAndRemove(req.params.id ,req.body ).then((comments)=>{
    res.status(200).json({comments ,deletedMessage:"your comment is deleted"});
  }).catch(()=>{
    res.status(400).json({ message: "Error! can't delete your blog list by id" });
  })
 
};

module.exports = { getComment, createComment, editComment, deleteComment };
