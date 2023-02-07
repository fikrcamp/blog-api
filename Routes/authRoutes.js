
const express = require('express');

const router = express.Router()

const authController = require("../Controllers/authController")

router.route("/auth/login").post(authController.login)

router.route("/auth/signup").post(authController.signup)

router.route("/auth/fill/:id").patch(authController.protect, authController.profile)

router.route("/auth/change/:id").put(authController.protect, authController.changePass)



module.exports = router