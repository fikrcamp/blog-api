const express = require("express");
const router = express.Router();


const commentController = require("../Controllers/commentController");
const authController =require ("../Controllers/authController")
router.route("/list/:id").get(commentController.getComment);

router.route("/create").post(authController.protect, commentController.createComment) 

router.route("/edit/:id").put(commentController.editComment);

router.route("/delete/:id").delete(commentController.deleteComment);

module.exports = router;
