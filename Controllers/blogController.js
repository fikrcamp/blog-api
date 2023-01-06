exports.blogs = (req,res)=>{
    res.status(200).json({message:"Here are all the blogs"})
}

exports.blog = (req,res)=>{
    res.status(200).json({message:"Here is one blogs"})
}

exports.saveBlog = (req,res)=>{
    res.status(200).json({message:"You have created a blog"})
}

exports.editBlog = (req,res)=>{
    res.status(200).json({message:"You have edited a blog"})
}

exports.deleteBlog = (req,res)=>{
    res.status(200).json({message:"You have deleted a blog"})
}