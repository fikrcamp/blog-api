const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const bodyParser = require('body-parser');


const app = express()

app.use(express.json())

const authRoutes = require('./Routes/authRoutes')
const blogRoutes = require('./Routes/blogRoutes')
const commentRoutes = require('./Routes/commentRoutes')


dotenv.config({path:"./.env"})
require("./server")

app.use(cors())


app.use("/", authRoutes)
app.use("/", blogRoutes)
app.use("/", commentRoutes)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set("view engine", "ejs");
app.use('/', express.static("uploads"))



const PORT = 8000

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})