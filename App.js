const express = require("express")

const app = express()

app.use(express.json())

const authRoutes = require('./Routes/authRoutes')

const blogRoutes = require('./Routes/blogRoutes')

const commentRoutes = require('./Routes/commentRoutes')

app.use("/", authRoutes)

app.use("/", blogRoutes)

app.use("/", commentRoutes)


const PORT = 8000

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})