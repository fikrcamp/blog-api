const express = require("express")

const app = express()

app.use(express.json())

const authRoutes = require("./Routes/authRoutes");
const postRoutes = require("./Routes/postRoutes");
const commentRoutes = require("./Routes/commentRoutes");

app.use("/auth",authRoutes);

app.use("/post",postRoutes);

app.use("/comment",commentRoutes);

const PORT = 8000

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})