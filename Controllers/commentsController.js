const comment = require("../Models/commentModel");

const getcomment = async (req, res) => {
  try {
    const getComment = await comment.find().populate("user").populate("blog");
    res.status(200).json({ getComment });
  } catch {
    res.status(400).json({ message: "getcomment , something is wrong" });
  }
};

const createcomment = async (req, res) => {
  req.body.user = req.user.id;
  const data = req.body;
  try {
    await comment.create(data).then(() => {
      res
        .status(200)
        .json({ message: "createComment you've created this comment" });
    });
  } catch {
    res.status(400).json({ message: "!!!!!!oops from createcomment " });
  }
};

const editcomment = async (req, res) => {
  const idComment = req.params.id;

  const updateComment = {
    comment: req.body.comment || comment.comment,
  };

  try {
    await comment.findByIdAndUpdate(idComment, updateComment).then(() => {
      res
        .status(200)
        .json({ message: `you've edited this comment based on your id  ` });
    });
  } catch {
    res.status(400).json({ message: `ERROR from editcomment` });
  }
};

const deletecomment = async (req, res) => {
  const idCommentDelete = req.params.id;
  try {
    await comment.findByIdAndDelete(idCommentDelete).then(() => {
      res.status(200).json({ message: `you've deleted this comment  ` });
    });
  } catch {
    res.status(400).json({ message: `ERROR from deletecommet  ` });
  }
};

module.exports = { getcomment, createcomment, editcomment, deletecomment };
