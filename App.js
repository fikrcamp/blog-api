const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const dotenv = require("dotenv");

const app = express();

const authRoutes = require("./Routes/authRoutes");
const blogs = require("./Routes/Blogs");
const comment = require("./Routes/Comments");
const cors = require("cors");

dotenv.config({ path: "./.env" });
require("./Server");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", express.static(path.join("images")));

app.use("/blog-images", express.static(path.join("blogImages")));

app.use("/comments", comment);
app.use("/auth", authRoutes);
app.use("/blog", blogs);

const PORT = 10000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
