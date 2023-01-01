let userList = [
  {
    id: 2,
    name: "Mohamed Abdullahi Hassan",
    email: "sayidka843@gmail.com",
    password: "sayid1234",
  },
  {
    id: 2,
    name: "salman ali nour",
    email: "salmanis1200@gmail.com",
    password: "salman1234",
  },
  {
    id: 3,
    name: "Miski abdikarim",
    email: "miski44@gmail.com",
    password: "miskii@63",
  },
];

//Get the list of all blogs
const BlogList = (req, res) => {
  res.status(200).json({
    message: "Get the list of all blogs",
    list: userList,
  });
};

//Get one blog by ID
const oneBlog = (req, res) => {
  const id = req.params.id - 1;
  res.status(200).json({
    message: `You got the user blog  list by Id`,
    list: userList[id],
  });
};
// create a blog by the user
const createBlog = (req, res) => {
  res.status(200).json({ message: "Your blog was being created" });
};

//For a user to edit a blog by its ID
const editBlog = (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    message: `You are edited the blog list that have the id of ${id}`,
  });
};

// For a user to delete a blog by its ID
const deleteBlog = (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: `Your have deleted blog list ${id} ` });
};

module.exports = { BlogList, oneBlog, createBlog, editBlog, deleteBlog };
