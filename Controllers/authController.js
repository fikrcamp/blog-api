const userModel = require('../Models/userModel');
const User = require('../Models/userModel');
const bcrypt = require("bcrypt")

// login
  const login = async(req, res) => {
    try{
      // if email is right or not
      const {email,password} = req.body;
      const findUser = await User.findOne({email})
      
      if(!findUser){
       return res.status(400).json({message:"your email is incorrect"})
      }
    // checking password is correct or not
      const comparePasswords = await bcrypt.compare(password, findUser.password)
      if (comparePasswords === false){
        return res.status(400).json({message:"your password is incorrect"})
      }
      res.status(200).json({message:"You have login your account" })   
    }catch(e){
      res.status(400).json({message:"Error"})    
    }
  
  };

// signup
const signUp = async(req, res) => {

  //checking the email is already taken
  const {email,password} = req.body
  const findUser = await User.findOne({email:email})
  if(findUser){
    return res.status(400).json({message:"Email is already taken"})
  }
  // encryp the password
  const hashedpassword= await bcrypt.hash(password,10);
  req.body.password =hashedpassword;
  
  try{
    await User.create(req.body)
    res.status(200).json({ message: "Your account is created successfully " });
  
  }catch{
    res.status(400).json({ message: "Error!! ,Your account is not created " });
  
  }

};

module.exports = { login, signUp };
