
const User = require("../Models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { findOne } = require("../Models/userModel")

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
        const token = jwt.sign({
            id:findUser._id,
            email:findUser.email
        },process.env.JWT_SECRET,{expiresIn:"1d"})

        console.log(token)

        res.status(200).json({message: "You have logged in", token})
    }catch(error){
        res.status(400).json({message: "User not found"})
    }
}

const signup = async(req, res) => {
    try{
        //1. email check
        const {email, password, confirmPassword} = req.body
        const findUser = await User.findOne({email})
        if(findUser){
            return res.status(400).json({message: "Email is already taken"})
        }
        
        //2. password length
        // if(password.length < 8){
        //     return res.status(400).json({message: "Password must be at least 8 characters"})
        // }

        //3. special character using regular expression
        // if(!/[!@#$%^&*(),.?":{}|<>]/g.test(password)){
        //     return res.status(400).json({message: "Password must contain at least one special character"})
        // }
        
        //4. encrypt password
        const hashedPassword = await bcrypt.hash(password, 10)
        req.body.password = hashedPassword
        req.body.confirmPassword = hashedPassword
        await User.create(req.body)
        res.status(200).json({message:"You've created an account"})
    }catch(error){
        res.status(400).json({message:"There was an error!"})
    }

}

const profile = async(req, res)=>{
    
    try{
        const userId = req.user.id
        await User.findByIdAndUpdate(userId, req.body, {new:true});
        res.status(200).json({message:"Profile updated successfully"})
    }catch(e){
        res.status(400).json({message:"There was an error! Please try again"})
    }
}

const changePass = async(req,res)=>{
    
    try{
        
        const { oldPassword, newPassword } = req.body;
        const user = await User.findById(req.user.id)
        
        const passwordMatch = await bcrypt.compare(oldPassword, user.password);
        
        if (!passwordMatch) {
            return res.status(401).json({ message: "Old password is incorrect" });
        }
    
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt)
        req.body.password = hashedPassword
        req.body.confirmPassword = hashedPassword
        await User.findByIdAndUpdate(user, req.body, {new:true})
        res.status(200).json({message:"Password successfully changed"})
    }catch(e){
        res.status(401).json({message:"Error! please try again."})
    }
}

const protect = (req, res, next)=>{
    try{
        const token = req.headers.authorization 

        if(!token){
            return res.status(401).json({message:"You're not logged in!"})
        }

        jwt.verify(token, process.env.JWT_SECRET, function(err,decoded){
            if(err){
                return res.status(401).json({message:"Your session has expired"})
            }
            req.user = {
                id: decoded.id,
                email: decoded.email
            }
        })
        next()
    }catch(e){
        return res.status(500).json({message: "Server error"})
    }
}

module.exports = {
    login,
    signup,
    profile,
    changePass,
    protect
}
