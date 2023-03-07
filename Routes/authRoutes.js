const express = require("express");
 
const router = express.Router();
const authController = require("../Controllers/authController");

router.route("/login").post(authController.login);

router.route("/signup").post(authController.signUp);

router.route("/edit/:id").put(authController.protect ,authController.editProfile);
router.route("/user/:id").get(authController.getUser);

router.route("/change/:id").put( authController.protect ,authController.changePassword);

module.exports = router;



 