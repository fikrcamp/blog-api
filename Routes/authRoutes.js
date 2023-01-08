
const express = require('express');

const router = express.Router()

const authController = require("../Controllers/authController")

router.route("/auth/login").post(authController.login)

router.route("/auth/signup").post(authController.signup)


module.exports = router