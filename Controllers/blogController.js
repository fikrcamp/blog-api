const e = require("express")
const Blog =require("../models/blogModels")


  //get all blogs 
exports.blogs =  async(req,res)=>{
    try{
      const blogs=  await Blog.find({})
        res.status(200).json({blogs})
    }
    catch(e){
        res.status(400).json({message: "we cannot find blogs"})
    } 
}

   // get one blog
exports.blog = async(req,res)=>{
    try{
        const {id}=req.params
        const blog =  await Blog.findById(id).populate("user")
        res.status(200).json({blog})
    }
    catch(e){
      
        res.status(200).json({message: "can't fing any blog"}) 
    }   
}

    // save a blog
exports.saveBlog =  async(req,res)=>{
    try{
        await Blog.create(req.body)
        res.status(200).json({message:"You have created a blog"})
    }
    catch(e){
        res.status(400).json({message: " oops we couldn't saved these blog"})
    }
}

    // edit blog
exports.editBlog = async(req,res)=>{
    try{
        const{id}=params.id
        await Blog.findByIdAndUpdate(id,req.body)
        res.status(200).json({message:"You have edited a blog"})
    }
    catch(e){
        res.status(400).json({ message: "we couldn't edit your blog"})
    }
}


    // delete blog 
exports.deleteBlog = async(req,res)=>{
    try{
        const {id}=req.params
        await Blog.findByIdAndDelete(id)
        res.status(200).json({message:"You have deleted a blog"})
    }
    catch(e){
    res.status(400).json({message: "you can't delete this blog"})
}
}