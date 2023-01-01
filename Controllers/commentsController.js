const getcomment = (req, res) => {
    res.status(200).json({ message: "getcomment , these are the all the comments so far" })
}

const createcomment = (req, res) => {
    res.status(200).json({ message: "createcomment you've created this comment" })
}

const editcomment = (req, res) => {
    res.status(200).json({ message: `you've edited this comment ` })
}

const deletecomment = (req, res) => {
    res.status(200).json({ message: `you've deleted this comment  ` })
}


module.exports = { getcomment, createcomment, editcomment, deletecomment }

