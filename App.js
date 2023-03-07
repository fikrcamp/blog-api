const express = require("express");
const cors = require("cors");
const dotenv= require("dotenv");


const app = express();
app.use(express.json({
  limit: '50mb'
}));
app.use(cors());
app.use(express.json());

 
 
const AuthRoutes = require("./Routes/authRoutes");
const BlogRoutes = require("./Routes/blogRoutes");
const CommentRoutes = require("./Routes/commentRoutes");

dotenv.config({Path:"./.env"})
 
require("./server")


app.use("/auth", AuthRoutes);
app.use("/blog", BlogRoutes);
app.use("/comment", CommentRoutes);
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});