const express = require("express")

const app = express()

app.use(express.json())

const authRoutes = require("./Routes/authRoutes")
const blogs = require("./Routes/Blogs")
const comment = require("./Routes/Comments")

app.use("/comments", comment)
app.use("/auth", authRoutes)
app.use("/blog", blogs)


const PORT = 9000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})