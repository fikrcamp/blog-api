const blog = require('../Models/blogModel')



const bloglist = async(req, res) => {
    try{
        await blog.find({blog}).then(()=>{
            res.status(200).json({ message: "this is the bloglist getter, we found these data  " })
        })
       
    }catch{
        res.status(400).json({ message: "from getter method :- OOPS something is wrong  " })
    }
    
}

const oneblog = async(req, res) => {
    const id = req.params.id

try{
    await blog.findById(id).then(()=>{
        res.status(200).json({message:"you get this id data from database"})
      })

}catch{
        res.status(400).json({message:"from getOneBlog error!!!!!"})
}
  
    
   
}

const createblog = async(req, res) => {
    try{
       await blog.create(req.body).then(()=>{
        res.status(200).json({ message: " you've created a new post " })
       })
    }catch{
        res.status(400).json({ message: "from post/create method :- OOPS something is wrong " })
    }
    
}

const editblog = async(req, res) => {
  const idEdit = req.params.id

  const newUpdate = {
    id:idEdit,
    title:req.body.title|| blog.title ,
    content:req.body.content || blog.content
  }

  try{
    await blog.findByIdAndUpdate(idEdit,newUpdate).then(()=>{
        res.status(200).json({message:"successfully edited that blog based on your id selection"})
      })
  }
  catch{
    res.status(400).json({message:"something is wrong from editblogg"})
  }

    
    
}

const deleteblog = async(req, res) => {
    const idDelete = req.params.id
    
    try{
        await blog.findByIdAndDelete(idDelete).then(()=>{
            res.status(200).json({message:"you've deleted successfully that data based on your id "})
        })
    }catch{
        res.status(200).json({message:"error from deleteblog try again"})
    }

    
}


module.exports = { bloglist, oneblog, createblog, editblog, deleteblog }