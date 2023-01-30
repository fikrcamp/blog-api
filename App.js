// importing dotenv and express
const express = require("express")
const dotenv =require("dotenv")

// epresss init
const app = express()

// importing components 
const authRoutes = require("./Routes/authRoutes")
const blogRoutes = require("./Routes/blogRoutes")
const commentRoutes = require("./Routes/commentRoutes")

// .env configration 
dotenv.config({path:"./.env"})

// inporting .server.js
require("./server")

// middlewares
app.use(express.json())

app.use("/auth",authRoutes)
app.use("/comment",commentRoutes)
app.use("/blog",blogRoutes)


// port making 
const PORT = 8000

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})