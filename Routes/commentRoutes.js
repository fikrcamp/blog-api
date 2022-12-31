
const express = require('express')

const router = express.Router()

const commentController = require("../Controllers/commentController")

router.route("/comment")
    .get(commentController.commentList)
    .post(commentController.newComment)

router.route("/comment/:id")
    .put(commentController.editComment)
    .delete(commentController.deleteComment)


module.exports = router