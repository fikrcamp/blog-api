const mongoose = require("mongoose");

const schema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  location: {
    type: String,
  },
  bio: {
    type: String,
  },
  work: {
    type: String,
  },
});

const userModel = mongoose.model("User", schema);

module.exports = userModel;
