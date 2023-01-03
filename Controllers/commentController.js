// GET COMMENT CONTROLLER

exports.getComment = (req, res) => {
  res.status(200).json({ message: "Getted comment" });
};

// CREATE COMMENT CONTROLLER

exports.createComment = (req, res) => {
  res.status(200).json({ message: "Created comment" });
};

// EDIT COMMENT CONTROLLER

exports.editComment = (req, res) => {
  res.status(200).json({ message: "Edited your comment" });
};

// DELETE COMMENT CONTROLLER

exports.deleteComment = (req, res) => {
  res.status(200).json({ message: "Deleted comment" });
};
