const { find } = require("../models/userModel")
const User =require("../models/userModel")
const bcrypt =require("bcrypt")
const e = require("express")
// const e = require("express")

    // login
exports.login = async(req,res)=>{
    try{
        // if email is correct 
        const {email}=req.body
        const findUser= await User.findOne({email})
        if(!findUser){
            return res.status(400).json({message:"Email or password is incorrect"})
        }
        
        // if password is correct
        const comparePassword= await bcrypt.compare(password, findUser.password)
        if (comparePassword===false){
            return res.status(400).json({message:"Email or password is incorrecr"})
        }

        res.status(200).json({message:"You have logged in"})
    }
    catch{
        res.status(400).json({message:"Error"})
    }
   
}
    // signup a new user
exports.signUp = async(req,res)=>{
   try{
    // checking if email exists
    const {email,password}=req.body
    const findUser= await User.findOne({email})
    if (findUser){
        return res.status(400).json({message: "Email is already exists try anther one"})
    }
    // password encryption
    const hashedPassword=  await bcrypt.hash(password,10)
    req.body.password=hashedPassword


    //creating a new user
    await User.create(req.body) 
    res.status(200).json({message:"You have created a account"})
   }
    catch(e){
        res.status(400).json({message: "Oops we hava an error"})
        //console.log(e)
    }

}



