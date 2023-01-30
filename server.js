const mongoose =require("mongoose")
mongoose.connect(process.env.DB)
.then(()=>{
    console.log("connected to database")
})
.catch(()=>{
    console.log("couldn't connect to the database")
})