const express = require("express")

const router = express.Router()

const commentController = require("../Controllers/commentsController")

router.route("/getcomment").get(commentController.getcomment)

router.route("/createcomment").post(commentController.createcomment)


router.route("/editcomment/:id").put(commentController.editcomment)

router.route("/deletecomment/:id").delete(commentController.deletecomment)

module.exports = router