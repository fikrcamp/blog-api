const mongoose = require("mongoose");


mongoose.connect(process.env.db)
.then(()=>{
    console.log("connected  the database");
})
.catch(()=>{
    console.log("could not connected the database");
})