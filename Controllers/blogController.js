const blogModel = require('../Models/blogModel');
const Blog = require('../Models/blogModel');
 
// create a blog by the user
const createBlog = async(req, res) => {
  try{
    await Blog.create(req.body)
    res.status(200).json({ message: "Your blog is created" });
   
  }catch{
    res.status(400).json({ message: "Oops! ,Your blog is not being created " });
   
  }
};

//Get the list of all blogs
const BlogList = async(req, res) => {
  try{
   const blogs = await Blog.find({}).populate("User")
   res.status(200).json({blogs})
  } 
  catch(e){
   res.status(400).json({ message: "Error! can't fetch the blogs" });
  }}
     


//Get one blog by ID
const oneBlog = async(req, res) => {
 try{
  const blogs =await Blog.findById(req.params.id).populate("user") 
  res.status(200).json({blogs})
 } 
 catch(e){
  res.status(400).json({ message: "Error! can't fetch your blog id" });
 }
    
 
 
};






//For a user to edit a blog by its ID
const editBlog = async(req, res) => {
  await Blog.findByIdAndUpdate(req.params.id ,req.body ).then((blogs)=>{
    res.status(200).json({blogs ,editedMessage:"your blog is updated"});
  }).catch(()=>{
    res.status(400).json({ message: "Error! can't edit your blog id" });
  })
 
};

// For a user to delete a blog by its ID
const deleteBlog = async(req, res) => {
  await Blog.findByIdAndRemove(req.params.id ,req.body ).then((blogs)=>{
    res.status(200).json({blogs ,deletedMessage:"your blog is deleted"});
  }).catch(()=>{
    res.status(400).json({ message: "Error! can't delete your blog list by id" });
  })
 
};

module.exports = { BlogList, oneBlog, createBlog, editBlog, deleteBlog };
