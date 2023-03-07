const mongoose = require("mongoose");

mongoose.set('strictQuery', true);
mongoose.connect(process.env.db)
.then(()=>{
    console.log("connected  the database");
})
.catch(()=>{
    console.log("could not connected the database");
})