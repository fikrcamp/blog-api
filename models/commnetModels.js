const mongoose=  require("mongoose")
const commentSchema= mongoose.Schema({
    Comment: {
        type: String
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref:"User"
    },
    blog:{
        type:mongoose.Types.ObjectId,
        ref: "Blog"
    }
})
const commentModel= mongoose.model("comment", commentSchema)
module.exports=commentModel