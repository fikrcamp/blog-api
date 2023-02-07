const blog = require("../Models/blogModel");
const User = require("../Models/UserModel");

const bloglist = async (req, res) => {
  try {
    let bloged = await blog.find();
    res.status(200).json({ bloged });
  } catch (e) {
    res.status(400).json({ message: "OOPS ERROR!!" });
  }
};

const oneblog = async (req, res) => {
  const id = req.params.id;

  try {
    const oneBlog = await blog.findById(id, req.body).populate("user");
    res.status(200).json({ oneBlog });
  } catch {
    res.status(400).json({ message: "from getOneBlog error!!!!!" });
  }
};

const createblog = async (req, res) => {
  try {
    // getting users data from database
    const data = await User.findById(req.user.id);
    // checking if all inputs are filled of
    if (data.location == null || data.bio == null || data.work == null) {
      return res
        .status(401)
        .json({ message: "please compelete your profile first" });
    }

    req.body.user = req.user.id;
    //creating our new post
    await blog.create(req.body);
    res.status(200).json({ message: " you've created a new post " });
  } catch (e) {
    res.status(400).json({
      message: "from post/create method :- we could'not save the blog",
    });
  }
};

const editblog = async (req, res) => {
  const idEdit = req.params.id;

  const newUpdate = {
    id: idEdit,
    title: req.body.title || blog.title,
    content: req.body.content || blog.content,
  };

  try {
    await blog.findByIdAndUpdate(idEdit, newUpdate).then(() => {
      res.status(200).json({
        message: "successfully edited that blog based on your id selection",
      });
    });
  } catch {
    res.status(400).json({ message: "something is wrong from editblogg" });
  }
};

const deleteblog = async (req, res) => {
  const idDelete = req.params.id;

  try {
    await blog.findByIdAndDelete(idDelete).then(() => {
      res.status(200).json({
        message: "you've deleted successfully that data based on your id ",
      });
    });
  } catch {
    res.status(200).json({ message: "error from deleteblog try again" });
  }
};

module.exports = { bloglist, oneblog, createblog, editblog, deleteblog };
