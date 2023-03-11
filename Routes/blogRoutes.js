const express = require("express");

const router = express.Router()

const blogController = require("../Controllers/blogController")
const authController = require("../Controllers/authController")

router.route("/allBlog").get(blogController.allBlog);

router.route("/create").post(authController.protect, blogController.createBlog);

router.route("/my").get(authController.protect,blogController.userblog);

router.route("/oneBlog/:id").get(blogController.oneBlog);

router.route("/edit/:id").put(blogController.editBlog);

router.route("/delete/:id").delete(blogController.deleteBlog);

module.exports = router