
const User = require("../Models/userModel")

exports.login = (req,res)=>{
    res.status(200).json({message:"Hello from buushe login"})
}

exports.signup = async(req,res)=>{

    try{
        await User.create(req.body)
        res.status(200).json({message:"You have created account"})

    }catch{
        res.status(400).json({message:"Oops we have error!"})
    }
   
 }