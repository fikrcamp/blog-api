
const Blog = require("../Models/blogModel")
const User = require("../Models/userModel")
  //
  exports.allBlog = async(req, res) => {
    try{
      //get all blogs
      const blogs  = await Blog.find({})
      res.status(200).json({blogs})
      }catch(e){
      res.status(400).json({message:"Could not get blogs"})
      }
      
  };
  
  //
  exports.oneBlog = async(req, res) => {
    try {
    const blogs =  await Blog.findById(req.params.id).populate("user")
      res.status(200).json({blogs})
    }catch(e){
      res.status(400).json({message:"Oops we have error!"})
      console.log(e.message);
    }
  };
  // 
  exports.userblog = async(req,res)=>{
    try{
      const {id} = req.user
      // console.log(req.user);
      // console.log(req.user);
      // const {id} = req.user
      const blogs = await Blog.find({user:id})
      // console.log(blogs);
      res.status(200).json({blogs})
    }catch(e){
      res.status(401).json({message:"couldn't find blogs"})
      // console.log(e.message);
    }
  }

  //
  exports.createBlog = async(req, res) => {
    try{
      //save blog
      //1.get the user data from database
      const user = await User.findById(req.user.id)
      // console.log(user)
      //2.check if is empty location,bio,work
    if(user.location == null || user.work == null || user.bio == null){
     return res.status(401).json({message:"please complete you profile"})
    }


      


      req.body.user = req.user.id
      // console.log(req.user)
      
      await Blog.create(req.body)
      res.status(200).json({message:"You have created blog"})
  
  }catch{
      res.status(400).json({message:"Oops we have error!"})
  }
  };
  
  //edit
  exports.editBlog = async(req, res) => {
    try{
      await Blog.updateOne(req.body)
      res.status(200).json({ message: "you have edited  your  blog" });
    }catch{
      res.status(400).json({message:"Oops we have error!"})
    }
  };

  exports.editBlog = async(req, res) => {
    await Blog.findByIdAndUpdate(req.params.id ,req.body ).then((blogs)=>{
      res.status(200).json({blogs ,editedMessage:"your blog is updated"});
    }).catch(()=>{
      res.status(400).json({ message: "Error! can't edit your blog id" });
    })
   
  };
  // 
  exports.deleteBlog = async(req, res) => {
   
    try{
      await Blog.deleteOne(req.body)
      res.status(200).json({ message: "you have deleted  your blog"});
    }catch{
      res.status(400).json({message:"Oops we have error!"})
    }
    
  };
  

  //user blogs
exports.userBlogs = async(req, res) => {
    try{
     console.log(req.user.id);
       const {id} = req.user
       const blogs= await  Blog.find({user:id})
       res.status(200).json({ message: blogs});
     } 
     catch(e){
      res.status(400).json({ message: "error can't get userblogs" });

     }
        
  };
  