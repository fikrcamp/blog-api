
const express = require('express')

const router = express.Router()

const blogController = require("../Controllers/blogController")

router.route("/blog")
    .get(blogController.allBlogs)
    .post(blogController.newBlog)

router.route("/blog/:id")
    .get(blogController.certainBlog)
    .put(blogController.updateBlog)
    .delete(blogController.deleteBlog)

module.exports = router