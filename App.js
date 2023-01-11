const express = require("express")
const dotenv = require("dotenv")

const app = express()



const authRoutes = require("./Routes/authRoutes")
const blogs = require("./Routes/Blogs")
const comment = require("./Routes/Comments")

dotenv.config({path:'./.env'})
require("./Server")


app.use(express.json())
app.use("/comments", comment)
app.use("/auth", authRoutes)
app.use("/blog", blogs)


const PORT = 10000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})