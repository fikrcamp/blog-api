const express = require("express");

const app = express();

app.use(express.json());

// importing auth router

const authRoutes = require("./Routes/authRoutes");

app.use("/auth", authRoutes);

// importing blog router

const blogRoutes = require("./Routes/blogRoutes");

app.use("/blog", blogRoutes);

// importing comment router

const commentRoutes = require("./Routes/commentRoutes");

app.use("/comments", commentRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
