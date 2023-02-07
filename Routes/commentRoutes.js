
const express = require('express')

const router = express.Router()

const commentController = require("../Controllers/commentController")
const authController = require("../Controllers/authController")

router.route("/comment").post(authController.protect, commentController.newComment)

router.route("/comment/:id")
    .get(commentController.commentList)
    .put(commentController.editComment)
    .delete(commentController.deleteComment)


module.exports = router