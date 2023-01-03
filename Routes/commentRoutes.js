const express = require("express");
const cRuuter = express.Router();

const commentCountroller = require("../Controllers/commentController");

// GET COMMENT

cRuuter.route("/getComment").get(commentCountroller.getComment);

// CREATE COMMENT

cRuuter.route("/CreateComment").post(commentCountroller.createComment);

//  EDIT COMMENT

cRuuter.route("/editComment/:id").put(commentCountroller.editComment);

// DELETE COMMENT

cRuuter.route("/deleteComment/:id").delete(commentCountroller.deleteComment);

//
module.exports = cRuuter;
