const express = require("express");
const router = express.Router();

const blogController = require("../Controllers/blogController");
const authController = require("../Controllers/authController");

router.route("/list").get(blogController.BlogList);
router.route("/list/:id").get(blogController.oneBlog);
router.route("/create").post(authController.protect , blogController.createBlog);
router.route("/edit/:id").put(blogController.editBlog);
router.route("/delete/:id").delete(blogController.deleteBlog);
router.route("/my").get(authController.protect,blogController.userBlogs);

module.exports = router;
