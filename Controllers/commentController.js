
const commentList = (req, res) => {
    res.status(200).json({message: "Get list of all comments"})
}

const newComment = (req, res) => {
    res.status(200).json({message: "leave a comment on the blog"})
}

const editComment = (req, res) => {
    res.status(200).json({message: `edit comment ${id}` })
}

const deleteComment = (req, res) => {
    res.status(200).json({message: `delete comment ${id}`})
}

module.exports = {
    commentList,
    newComment,
    editComment,
    deleteComment,
}