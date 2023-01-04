const express = require("express")

const app = express()

app.use(express.json())

const authRoutes = require("./Routes/authRoutes")

const commentRoutes = require("./Routes/commentRoutes")

const postRoutes = require("./Routes/blogRoutes")

app.use("/auth",authRoutes)
app.use("/comment",commentRoutes)
app.use("/post",postRoutes)

const PORT = 8000

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})