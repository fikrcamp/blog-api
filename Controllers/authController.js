const userModel = require('../Models/userModel');
const User = require('../Models/userModel');
const bcrypt = require("bcrypt")
const jwt =require("jsonwebtoken")
const cloudinary = require('../Utils/cloudinary');

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
      const token=jwt.sign({
        id:findUser._id ,
        email: findUser.email ,
        image:findUser.image
        
      }, process.env.jwt_secret ,{expiresIn:"1d"})

        console.log(token);
      res.status(200).json({message:"You have login your account" ,token})   
    }catch(e){
      res.status(400).json({message:"Error"})    
    }
  
  };

// signup
const signUp = async(req, res) => {

  //checking the email is already taken
  const {email,password } = req.body
  const findUser = await User.findOne({email:email})
  if(findUser){
    return res.status(400).json({message:"Email is already taken"})
  }
  // encrypt the password
  const hashedpassword= await bcrypt.hash(password,10);
  req.body.password =hashedpassword;
  
  try{
    await User.create(req.body)
    res.status(200).json({ message: "Your account is created successfully " });
  
  }catch{
    res.status(400).json({ message: "Error!! ,Your account is not created " });
  
  }

};



 
// edit profile
const editProfile = async(req, res) => {

  try{
    const id =req.params.id
    const user = await User.findById(req.params.id);
 
 
  
   //modify image conditionally

        if (req.body.image !== '') {
          const ImgId = user.image.public_id;
          if (ImgId) {
              await cloudinary.uploader.destroy(ImgId);
          }

          const newImage = await cloudinary.uploader.upload(req.body.image, {
              folder: "blog-frontend",
              width: 1000,
              crop: "scale"
          });

          const images = {
              public_id: newImage.public_id,
              url: newImage.secure_url
          }
      

           
   
    await User.findOneAndUpdate({_id:id} ,{
      firstName: req.body.inputs.firstName || user.firstName,
        lastName :req.body.inputs.lastName || user.lastName,
        location  :req.body.inputs.location || user.location ,
        bio: req.body.inputs.bio || user.bio,
        work :req.body.inputs.work || user.work,
        image : images 
  
    } ).then(()=>{
      res.status(200).json({message: "your profile is updated" });
    })
   
  
  }

  }catch{
    res.status(400).json({ message: "Error!! ,Your account is not created " });
  
  }

};


// protect middleware


const protect =(req,res,next)=>{
  try{
  const token =  req.headers.authorization ;
 
 
  if(!token){
    return res.status(401).json({message:"you are not logged in "})
  }
  jwt.verify(token , process.env.jwt_secret ,function(err,decoded){
    if(err){
      return res.status(401).json({message:"please login again"})
    }
    req.user = {
      id:decoded.id,
      email:decoded.email,
      lastName:decoded.lastName

    }
 
  })
  }catch(e){
   console.log(e);
  }
  next()
}


// change password
const changePassword = async(req, res) => {
  try{
  id =req.params
    // verify the old password is correct
    const {password  ,new_password ,confirm_password} = req.body;
 
    const findUser  = await User.findById(id.id)
    const passwordMatch = await bcrypt.compare(password, findUser.password); 
    if (!passwordMatch) {
        return res.status(400).json({ message: "Old password is incorrect" });
    }
 

    
  //  verifying the new password and confirm  password are same or not
    if(new_password != confirm_password){
      return res.status(400).json({message:"password doesn't match"})
       }
 
    // hashed the new password
      const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(new_password, salt);

    //saving the new password in to the database
    await User.findByIdAndUpdate(id.id, { password: hashedPassword });
  
      res.status(200).json({ message: "Your password changed successfully " });    

 
  }catch(e){
    res.status(400).json({message:"Error"}) 
   
   
  }

};

 
 //Get one blog by ID
const getUser = async(req, res) => {
  try{
   const user =await User.findById(req.params.id)
   res.status(200).json({user})
  } 
  catch(e){
   res.status(400).json({ message: "Error! can't fetch your blog id" });
  }
 };
 



module.exports = { login, signUp ,protect ,editProfile ,changePassword ,getUser};

