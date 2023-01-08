const express = require("express")
const dotenv = require("dotenv")

const app = express()



const authRoutes = require("./Routes/authRoutes");
const postRoutes = require("./Routes/postRoutes");
const commentRoutes = require("./Routes/commentRoutes");

dotenv.config({path:"./.env"})

require("./server")

app.use(express.json())

app.use("/auth",authRoutes);

app.use("/post",postRoutes);

app.use("/comment",commentRoutes);

const PORT = 8000

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})