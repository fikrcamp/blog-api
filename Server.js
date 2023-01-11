const mongoose = require("mongoose")

mongoose.connect(process.env.DB)
.then(()=>{
    console.log('connected to the database successfully')
})
.catch(()=>{
    console.log("un successfull connection")
})


