const mongoose = require("mongoose")
mongoose.set('strictQuery', true);
// console.log(process.env.DB)
mongoose.connect(process.env.DB)

.then(() => {
    console.log("Connected to the database")
}).catch((err) => {
    console.log("Couldn't connected")
})