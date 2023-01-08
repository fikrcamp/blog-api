const blog = require("../Models/blogModel")

exports.Bloglist = async(req,res)=>{
    
  try { 
    await blog.find({});
   res.status(200).json({message: "here are all the Blogs"})
} catch{
    res.status(400).json({message: "we could not find the Blogs"})
}
}
exports.Blog = async(req,res)=>{
    ID = req.params.id
       try { 
    await blog.findById(ID)
   res.status(200).json({message: "here is the blog you requested"})
} catch(e){
    console.log(e)
    res.status(400).json({message: "we could not find the Blog you requested" })
    }    
    
}
exports.createBlog = async(req,res)=>{
     try { 
    await blog.create(req.body);
   res.status(200).json({message: "your Blog is created"})
} catch{
    res.status(400).json({message: "your Blog could not be created" })
    }   
}
exports.editBlog = (req,res)=>{
      ID = req.params.id
   blog.findByIdAndUpdate(ID,{title:req.body.title , content:req.body.content },(err)=>{
        if(err){
            res.status(400).json({message: "your Blog could not be edited" })
        }
    
    res.status(200).json({message: "your Blog is edited"})
}
    
)}
    
   

exports.deleteBlog = async(req,res)=>{
    Id = req.params.id
    try{ await blog.findByIdAndDelete(Id)
    res.status(200).json({message: "your Blog is deleted"})
}catch{
     res.status(400).json({message: "your Blog could not be deleted" })
}
}