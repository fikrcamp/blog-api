const userModel = require('../Models/userModel');
const User = require('../Models/userModel');

// login
const login = async(req, res) => {
  await  User.find().then((login)=>{
    res.send({login})
  }).catch(()=>{
    res.status(200).json({ message: "Error! "});
  })
 
};

// signup
const signUp = async(req, res) => {
  console.log(req.body)
try{
  await User.create(req.body)
  res.status(200).json({ message: "Your account is created successfully " });
 
}catch{
  res.status(400).json({ message: "Error!! ,Your account is not created " });
 
}

};

module.exports = { login, signUp };
