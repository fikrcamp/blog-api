
const allBlogs = (req, res) => {
    res.status(200).json({message: "get list of all blogs"})
}

const certainBlog = (req, res) => {
    res.status(200).json({message: `get blog ${id}`})
}

const newBlog = (req, res) => {
    res.status(200).json({message: "create a blog"})
}

const updateBlog = (req, res) => {
    res.status(200).json({message: `edit blog ${id}`})
}

const deleteBlog = (req, res) => {
    res.status(200).json({message: `delete blog ${id}`})
}

module.exports = {
    allBlogs,
    certainBlog,
    newBlog,
    updateBlog,
    deleteBlog,
}