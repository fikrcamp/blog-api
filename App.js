const express = require("express")

const app = express()

app.use(express.json())

const authRoutes = require("./Routes/authRoutes")

app.use("/auth",authRoutes)

const PORT = 8000

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})