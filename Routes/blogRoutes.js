const express = require("express");

const router = express.Router()

const blogController = require("../Controllers/blogController")

router.route("/list").get(blogController.allBlog);

router.route("/create").post(blogController.createBlog);

router.route("/list/:id").get(blogController.oneBlog);

router.route("/edit/:id").put(blogController.editBlog);

router.route("/delete/:id").delete(blogController.deleteBlog);

module.exports = router