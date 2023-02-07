const express = require("express");

const router = express.Router();

const authController = require("../Controllers/authController");

router.route("/login").post(authController.login);
router.route("/signup").post(authController.signup);
router
  .route("/signup/profile")
  .put(authController.protect, authController.profile);
//changing the password path
router.route("/change").put(authController.protect, authController.password);

module.exports = router;
