const express = require("express");

const router = express.Router();

const blogController = require("../Controllers/blogController");

router.route("/list").get(blogController.BlogList);
router.route("/list/:id").get(blogController.oneBlog);
router.route("/create").post(blogController.createBlog);
router.route("/edit/:id").put(blogController.editBlog);
router.route("/delete/:id").delete(blogController.deleteBlog);

module.exports = router;
