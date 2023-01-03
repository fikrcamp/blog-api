const blogList = [
  { id: 1, description: "this is tech artile", type: "tech" },
  { id: 2, description: "this is social artile", type: "social" },
];

// BLOG LIST CONTROLLER

exports.bloglist = (req, res) => {
  res.status(200).json({ blogList: blogList });
};

// GET ONE BLOG CONTROLLER

exports.getOne = (req, res) => {
  console.log(req.params.id);
  res.status(200).json({ message: "getted one blog" });
};

//  CREATE BLOG CONTROLLER

exports.create = (req, res) => {
  res.status(200).json({ message: "Created blog" });
};

// EDIT BLOG CONTROLLER

exports.edit = (req, res) => {
  console.log(req.params.id);
  res.status(200).json({ message: "Edited blog" });
};

// DELETE BLOG CONTROLLER

exports.delete = (req, res) => {
  console.log(req.params.id);
  res.status(200).json({ message: "Delted blog" });
};
