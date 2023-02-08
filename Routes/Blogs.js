const express = require("express");
const router = express.Router();

const blogsController = require("../Controllers/blogsController");
const authController = require("../Controllers/authController");

router.route("/bloglist").get(blogsController.bloglist);

router.route("/oneblog/:id").get(blogsController.oneblog);

router
  .route("/createblog")
  .post(authController.protect, blogsController.createblog);

router.route("/editblog/:id").put(blogsController.editblog);

router.route("/deleteblog/:id").delete(blogsController.deleteblog);
router.route("/my").get(authController.protect, blogsController.usersBlog);

module.exports = router;
