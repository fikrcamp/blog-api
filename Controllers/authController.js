
const User = require("../Models/UserModel")
exports.login = (req,res)=>{
    res.status(201).json({message: "hello login"})
}
exports.signup = async(req,res)=>{
    
try{  await  User.create(req.body)
         
   res.status(200).json({message: "hello you have created a new account"})
}catch{
    res.status(400).json({message: "oops you have error!"})
}
  }