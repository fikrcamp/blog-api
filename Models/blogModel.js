const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: String,
  content: String,
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const blogModel = mongoose.model("Blog", schema);

module.exports = blogModel;
