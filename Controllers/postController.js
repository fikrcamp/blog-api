exports.Bloglist = (req,res)=>{
    res.status(200).json({message: "here are all the Blogs"})
}
exports.Blog = (req,res)=>{
    
    res.status(200).json({message: "here is the blog you requested"})
}
exports.createBlog = (req,res)=>{
   
    res.status(200).json({message: "your Blog is created"})
}
exports.editBlog = (req,res)=>{
    
    res.status(200).json({message: "your Blog is edited"})
}
exports.deleteBlog = (req,res)=>{
    res.status(200).json({message: "your Blog is deleted"})
}