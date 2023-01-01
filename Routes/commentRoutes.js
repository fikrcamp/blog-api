const express = require("express");
const router = express.Router();

const commentController = require("../Controllers/commentController");

router.route("/list").get(commentController.getComment);

router.route("/create").post(commentController.createComment);

router.route("/edit/:id").put(commentController.editComment);

router.route("/delete/:id").delete(commentController.deleteComment);

module.exports = router;
