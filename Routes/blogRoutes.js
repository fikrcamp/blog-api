const express = require("express");

const bRuuter = express.Router();

// const blogList = [{ id: 1, description: "this is new artile", type: "tech" }];

// importing blogController

const blogController = require("../Controllers/blogController");

// BLOG LIST

bRuuter.route("/blogList").get(blogController.bloglist);

// GET ONE BLOG

bRuuter.route("/oneBlog/:id").get(blogController.getOne);

// CREATE BLOG

bRuuter.route("/create").post(blogController.create);

// EDIT BLOG

bRuuter.route("/edit/:id").put(blogController.edit);

//  DELETE BLOG

bRuuter.route("/delete/:id").delete(blogController.delete);
module.exports = bRuuter;
