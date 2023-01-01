const express = require("express")
const router = express.Router()

const blogsController = require("../Controllers/blogsController")

router.route("/bloglist").get(blogsController.bloglist)

router.route("/oneblog/:id").get(blogsController.oneblog)

router.route("/createblog").post(blogsController.createblog)

router.route("/editblog/:id").put(blogsController.editblog)

router.route("/deleteblog/:id").delete(blogsController.deleteblog)

module.exports = router