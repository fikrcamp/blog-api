const express = require("express");

const router = express.Router()

const authController = require("../Controllers/authController")


router.route("/login").post(authController.login)

router.route("/signup").post(authController.signup)
router.route("/profile/:id").put(authController.protect,  authController.editProfile);
// router.route("/change").put(authController.protect, authController.password);
router.route("/user/:id").get( authController.getUser);

module.exports = router