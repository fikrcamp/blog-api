const express = require("express");

const router = express.Router();

const commentController = require("../Controllers/commentsController");
const authController = require("../Controllers/authController");

router
  .route("/getcomment/:id")
  .get(authController.protect, commentController.getcomment);

router
  .route("/createcomment")
  .post(authController.protect, commentController.createcomment);

router.route("/editcomment/:id").put(commentController.editcomment);

router.route("/deletecomment/:id").delete(commentController.deletecomment);

module.exports = router;
