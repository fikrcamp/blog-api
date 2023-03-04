const express = require("express");

const router = express.Router();

const authController = require("../Controllers/authController");
const upload = require("../middleware/file-upload");

router.route("/login").post(authController.login);
router.route("/signup").post(authController.signup);
router
  .route("/signup/profile")
  .put(authController.protect, upload.single("image"), authController.profile);
//changing the password path
router.route("/change").put(authController.protect, authController.password);
router.route("/getUser").get(authController.protect, authController.getUser);

module.exports = router;
