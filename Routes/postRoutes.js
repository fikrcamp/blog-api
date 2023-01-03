const express = require("express");
const router = express.Router();

const postController = require("../Controllers/postController")

router.route("/Bloglist").get(postController.Bloglist)
router.route("/Blog/:id").get(postController.Blog)
router.route("/createBlog").post(postController.createBlog)
router.route("/editBlog/:id").put(postController.editBlog)
router.route("/deleteBlog/:id").delete(postController.deleteBlog)

module.exports = router