const express = require("express");

const router = express.Router()

const blogController = require("../Controllers/blogController")

router.route("/allBlog").get(blogController.allBlog);

router.route("/create").post(blogController.createBlog);

router.route("/oneBlog/:id").get(blogController.oneBlog);

router.route("/edit/:id").put(blogController.editBlog);

router.route("/delete/:id").delete(blogController.deleteBlog);

module.exports = router