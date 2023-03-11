const dotenv = require("dotenv")
const cors = require("cors")
const express = require("express")
const app = express()

const authRoutes = require("./Routes/authRoutes")

const commentRoutes = require("./Routes/commentRoutes")

const postRoutes = require("./Routes/blogRoutes")


dotenv.config({path:"./.env"})
require("./server")
app.use(express.json({
    limit: '50mb'
  }));
app.use(cors())


 

app.use(express.json())
app.use("/auth",authRoutes)
app.use("/comment",commentRoutes)
app.use("/post",postRoutes)

const PORT = 8000

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})