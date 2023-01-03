const express = require("express");

const ruuter = express.Router();

// importing controlls

const authController = require("../Controllers/authController");

// login route

ruuter.route("/login").post(authController.login);

// signup route

ruuter.route("/signUp").post(authController.signup);
module.exports = ruuter;
