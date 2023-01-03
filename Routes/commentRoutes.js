const express = require("express");
const router = express.Router();

const commentController = require("../Controllers/commentController")

router.route("/comments").get(commentController.comments)
router.route("/createComment").post(commentController.createComment)
router.route("/editComment/:id").put(commentController.editComment)
router.route("/deleteComment/:id").delete(commentController.deleteComment)


module.exports = router