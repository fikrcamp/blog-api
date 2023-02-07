
const express = require('express')

const router = express.Router()

const blogController = require("../Controllers/blogController")
const authController = require("../Controllers/authController")

router.route("/blog")
    .get(blogController.allBlogs)
    .post(authController.protect, blogController.newBlog)

router.route('/blog/my').get(authController.protect, blogController.userBlogs)

router.route("/blog/:id")
    .get(authController.protect ,blogController.certainBlog)
    .put(authController.protect, blogController.updateBlog)
    .delete(authController.protect, blogController.deleteBlog)

module.exports = router