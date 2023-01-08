const Blog = require("../Models/blogModel")


const allBlogs = async(req, res) => {
    try{
        //find all blogs
        const blogs = await Blog.find()
        res.status(200).json(blogs)
    }catch{
        res.status(400).json({message:"there aint no blogs here"})
    }
    
}

const certainBlog = async(req, res) => {
    try{
        //find blog by id
        const blog = await Blog.findById(req.params.id)
        res.status(200).json(blog)
    }catch{
        res.status(400).json({message:"Blog not found"})
    }
}
    

const newBlog = async(req, res) => {
    try{
        //create a new blog
        const currentBlog = await Blog.create({title: req.body.title, content:req.body.content, author:req.body.author})
        res.status(200).json(currentBlog)
    }catch{
        res.status(400).json({message: "Error while creating new blog!!"})
    }
    
}

const updateBlog = async(req, res) => {
    try{
        //find blog by id and update it
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id,{
                title: req.body.title, 
                content:req.body.content, 
                author:req.body.author}, 
                {new:true})
        res.status(200).json(updatedBlog)
    }catch{
        res.status(400).json({message: "unable to update!!"})
    }
    
}

const deleteBlog = async(req, res) => {
    try{
        //find blog by id and delete it
        await Blog.findByIdAndDelete(req.params.id)
        res.status(200).json({message: `blog ${_id} was deleted`})
    }catch{
        res.status(400).json({message: "ERROR!!"})
    }
    
}

module.exports = {
    allBlogs,
    certainBlog,
    newBlog,
    updateBlog,
    deleteBlog,
}