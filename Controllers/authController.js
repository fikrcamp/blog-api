const { find } = require("../Models/userModel")
const User = require("../Models/userModel")
const bcrypt = require("bcrypt")


const login = async(req, res) => {
    try{
        //1.email check
        const {email, password} = req.body
        const findUser = await User.findOne({email})
        if(!findUser){
            return res.status(400).json({message:"Email/Password is incorrect"})
        }

        //2.password check
        const comparePassword = await bcrypt.compare(password, findUser.password)
        if(!comparePassword){
            return res.status(400).json({message:"Email/Password is incorrect"})
        }
        res.status(200).json({message: "You have logged in"})
    }catch(error){
        res.status(400).json({message: "User not found"})
    }
    
}

const signup = async(req, res) => {
    try{
        //1. email check
        const {email, password} = req.body
        const findUser = await User.findOne({email})
        if(findUser){
            return res.status(400).json({message: "Email is already taken"})
        }
        
        //2. password length
        if(password.length < 8){
            return res.status(400).json({message: "Password must be at least 8 characters"})
        }

        //3. special character using regular expression
        if(!/[!@#$%^&*(),.?":{}|<>]/g.test(password)){
            return res.status(400).json({message: "Password must contain at least one special character"})
        }
        //4. encrypt password
        const hashedPassword = await bcrypt.hash(password, 10)
        req.body.password = hashedPassword
        await User.create(req.body)
        res.status(200).json({message:"You've created an account"})
    }catch(error){
        res.status(400).json({message:"There was an error!"})
    }

}


module.exports = {
    login,
    signup,
}