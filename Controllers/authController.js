const User = require("../Models/userModel")



const login = async(req, res) => {
    try{
        await User.findOne({email: req.body.email})
        res.status(200).json({message: "You have logged in"})
    }catch{
        res.status(400).json({message: "User not found"})
    }
    
}

const signup = async(req, res) => {
    try{
        await User.create(req.body)
        res.status(200).json({message:"You've created an account"})
    }catch{
        res.status(400).json({message:"There was an error!"})
    }

}


module.exports = {
    login,
    signup,
}