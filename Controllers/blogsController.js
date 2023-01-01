
const bloglist = (req, res) => {
    res.status(200).json({ message: "this is the bloglist getter, we found these data  " })
}

const oneblog = (req, res) => {
    res.status(200).json({ message: "this is the oneblog getter, you've get an information based on your selected id" })
}

const createblog = (req, res) => {
    res.status(200).json({ message: "this is createblog post, you created a new post " })
}

const editblog = (req, res) => {
    res.status(200).json({ message: "this is the editblog put, you've edited that id " })
}

const deleteblog = (req, res) => {
    res.status(200).json({ message: "deleteblog ,you've deleted that item from your blog " })
}


module.exports = { bloglist, oneblog, createblog, editblog, deleteblog }