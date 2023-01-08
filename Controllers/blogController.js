
const Blog = require("../Models/blogModel")
  //
  exports.allBlog = async(req, res) => {
    await Blog.find().then((blogs)=>{
      res.send({blogs})
    }).catch(()=>{
      res.status(400).json({ message: "oops we have error" });
    })
  }
  
  //
  exports.oneBlog = async(req, res) => {
    try {
      await Blog.findOne(req.body)
      res.status(200).json({message:"you get one blog"})
    }catch{
      res.status(400).json({message:"Oops we have error!"})
    }
  };
  // 
  exports.createBlog = async(req, res) => {
    try{
      await Blog.create(req.body)
      res.status(200).json({message:"You have created blog"})
  
  }catch{
      res.status(400).json({message:"Oops we have error!"})
  }
  };
  
  //
  exports.editBlog = async(req, res) => {
    try{
      await Blog.updateOne(req.body)
      res.status(200).json({ message: "you have edited  your  blog" });
    }catch{
      res.status(400).json({message:"Oops we have error!"})
    }
  };
  
  // 
  exports.deleteBlog = async(req, res) => {
   
    try{
      await Comment.deleteOne(req.body)
      res.status(200).json({ message: "you have deleted  your blog"});
    }catch{
      res.status(400).json({message:"Oops we have error!"})
    }
    
  };
  
  