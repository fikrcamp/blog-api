const express = require("express");

const comment = express.Router()

const commentConrtoller = require("../Controllers/commentController")

comment.route("/getcomment").get(commentConrtoller.getComment)

comment.route("/create").post(commentConrtoller.createComment)

comment.route("/edit/:id").put(commentConrtoller.editComment);

comment.route("/delete/:id").delete(commentConrtoller.deleteComment);

module.exports = comment