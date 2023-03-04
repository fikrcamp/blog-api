const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: String,
  content: String,
  //
  image: {
    type: String,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  comment: {
    type: mongoose.Types.ObjectId,
    ref: "Comment",
  },
});

const blogModel = mongoose.model("Blog", schema);

module.exports = blogModel;
