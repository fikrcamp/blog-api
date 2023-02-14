const Blog = require("../Models/blogModel")
const User = require("../Models/userModel")


const allBlogs = async(req, res) => {
    try{
        //find all blogs
        const blogs = await Blog.find().populate("user")
        res.status(200).json({blogs})
    }catch{
        res.status(400).json({message:"there aint no blogs here"})
    }
    
}

const certainBlog = async(req, res) => {
    try{
        //find blog by id
        const blog = await Blog.findById(req.params.id).populate("user")
        res.setHeader('Content-Type', 'image/png');
        //res.sendFile(path.join(__dirname, 'uploads/image.png'));
        res.status(200).json({blog})
    }catch{
        res.status(400).json({message:"Blog not found"})
    }
}
    

const newBlog = async(req, res) => {
    try{
        
        
        //const files = req.file
        const user = await User.findById(req.user.id)
        if(user.location == null || user.bio == null || user.work == null){
            return res.status(401).json({message:("Please complete your profile first")})
        }

        let file = '';
        if(req.file) {
            file = req.file.filename;
        }
        const tags = req.body.tags.split(',');

        const blog = new Blog({
            title: req.body.title,
            tags: tags,
            content: req.body.content,
            user: req.user.id,
            file: file
        });
        
        await blog.save();
        // req.body.user = req.user.id
        // const currentBlog = await Blog.create(req.body)
        res.status(200).json({ success: true, data: blog,})
    }catch{
        res.status(400).json({message: "Error while creating new blog!!"})
    }
    
}

const userBlogs = async (req, res)=>{
    try{
        const {id} = req.user
        const blogs = await Blog.find({user:id}).populate("user")
        res.status(200).json({blogs})
    }catch(e){
        res.status(400).json({message: "couldn't find blog"})
    }
}

const profileBlog = async(req,res)=>{
    try{
        const user = await Blog.find({user:req.params.id}).populate("user")
        res.status(200).json({user})
    }catch(e){
        res.status(400).json({message: "Error!!!"})
    }
}


const updateBlog = async (req, res) => {
    try {
        // Find blog by id and update it
        const id = req.params.id
        const blog = await Blog.findById(id)

        let file = blog.file || '';
        if (req.file) {
            file = req.file.filename;
        }
        const tags = req.body.tags.split(',');

        blog.title = req.body.title;
        blog.tags = tags;
        blog.content = req.body.content;
        blog.user= req.user.id,
        blog.file = file;
        
        await blog.save()
        res.status(200).json({ success: true, data: blog});
    } catch (err) {
    res.status(400).json({ message: "Unable to update!!" });
    }
};

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
    profileBlog
}