const express = require("express");
const router = express.Router();

const blogsController = require("../Controllers/blogsController");
const authController = require("../Controllers/authController");
const blogUpload = require("../middleware/file-upload-image");

//
router.route("/bloglist").get(blogsController.bloglist);

router.route("/oneblog/:id").get(blogsController.oneblog);

router
  .route("/createblog")
  .post(
    authController.protect,
    blogUpload.single("newImage"),
    blogsController.createblog
  );

router
  .route("/editblog/:id")
  .put(blogUpload.single("newImage"), blogsController.editblog);

router.route("/deleteblog/:id").delete(blogsController.deleteblog);
router.route("/my").get(authController.protect, blogsController.usersBlog);

module.exports = router;
