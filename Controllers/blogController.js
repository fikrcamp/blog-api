const Blog = require("../Models/blogModel")
const User = require("../Models/userModel")

const allBlogs = async(req, res) => {
    try{
        //find all blogs
        const blogs = await Blog.find()
        res.status(200).json({blogs})
    }catch{
        res.status(400).json({message:"there aint no blogs here"})
    }
    
}

const certainBlog = async(req, res) => {
    try{
        //find blog by id
        
        const blog = await Blog.findById(req.params.id).populate("user")
        res.status(200).json({blog})
    }catch{
        res.status(400).json({message:"Blog not found"})
    }
}
    

const newBlog = async(req, res) => {
    try{
        //create a new blog
        const user = await User.findById(req.user.id)
        if(user.location == null || user.bio == null || user.work == null){
            return res.status(401).json({message:("Please complete your profile first")})
        }
        req.body.user = req.user.id
        const currentBlog = await Blog.create(req.body)
        res.status(200).json(currentBlog)
    }catch{
        res.status(400).json({message: "Error while creating new blog!!"})
    }
    
}

const userBlogs = async (req, res)=>{
    try{
        const {id} = req.user
        const blogs = await Blog.find({user:id})
        res.status(200).json({blogs})
    }catch(e){
        res.status(400).json({message: "couldn't find blog"})
    }
}

const updateBlog = async(req, res) => {
    try{
        //find blog by id and update it
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, 
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
        res.status(200).json({message: 'Successfully Deleted'})
    }catch{
        res.status(400).json({message: "ERROR!!"})
    }
    
}

module.exports = {
    allBlogs,
    certainBlog,
    newBlog,
    userBlogs,
    updateBlog,
    deleteBlog,
}