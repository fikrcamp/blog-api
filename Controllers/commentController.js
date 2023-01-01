const userComments = [
  {
    userId: 1,
    name: "Mohamed",
    comment: "👍wow you posted amazing picture ",
  },
  {
    userId: 1,
    name: "jama farah",
    comment: "keep up bro ",
  },
];

//  Get list of comments for a certain blog
const getComment = (req, res) => {
  res.status(200).json({
    message: "Here are all the comments ",
    comment: userComments,
  });
};

//  User to leave a comment on a certain blog
const createComment = (req, res) => {
  res.status(200).json({
    message: "You  have created a blog  comment thanks",
  });
};

// User to edit comment by ID
const editComment = (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: `you have edited  your  comment ${id}` });
};

// User to delete comment by ID
const deleteComment = (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: `you have deleted  your comment  ${id}` });
};

module.exports = { getComment, createComment, editComment, deleteComment };
