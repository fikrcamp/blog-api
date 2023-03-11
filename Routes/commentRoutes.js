const express = require("express");

const comment = express.Router()
const commentRoutes = require("../Controllers/commentController")
const authController = require("../Controllers/authController")

comment.route("/getcomment/:id").get(commentRoutes.getComment);

comment.route("/create").post(authController.protect,commentRoutes.createComment);

// comment.route("/my").get(commentRoutes.userblog);

comment.route("/edit/:id").put(commentRoutes.editComment);

comment.route("/delete/:id").delete(commentRoutes.deleteComment);

// router.route("/").post(authController.protect,commentRoutes.createComment)

// router.route("/:id").get(commentRoutes.getComment).put(commentRoutes.editComment).delete(commentRoutes.deleteComment)

module.exports = comment