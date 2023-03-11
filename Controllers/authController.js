
const User = require("../Models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cloudinary = require("../Utils/cordinary")

 //Get the user
 exports.getUser = async(req, res) => {
  try{
   const findUser =await User.findById(req.params.id)
   res.status(200).json({findUser})
  } 
  catch(e){
   res.status(400).json({ message: "oops we have error" });
  }
 };


 // edition of profile
exports.editProfile = async(req,res)=>{

  try{
    const id =req.params.id
    const findUser = await User.findById(req.params.id);
 
 console.log(findUser);
  
  //  modify the image  and saving cloudinary

        if (req.body.image !== '') {
          const idImage = findUser.image.public_id;
          if (idImage) {
              await cloudinary.uploader.destroy(idImage);
          }

        }

         const new_image =await cloudinary.uploader.upload(req.body.image, {
              folder: "blog-web",
              width: 1000,
              height: 1000,
              crop: "scale"
          });

          const images = {
              public_id: new_image .public_id,
              url: new_image .secure_url
          }
 
    
 console.log(images);
   
    await User.findOneAndUpdate({_id:id} ,  
      {
       firstName: req.body.inputs.firstName || findUser.firstName,
        lastName :req.body.inputs.lastName || findUser.lastName,
        location  :req.body.inputs.location || findUser.location ,
        bio: req.body.inputs.bio || findUser.bio,
        work :req.body.inputs.work || findUser.work,
        image : images 
  
    } 
    ).then(()=>{
      res.status(200).json({message: "your profile is successifully updated" });
    })
   
   
  }catch{
      res.status(400).json({message:"Oops we have error!"})
  }
 
}
 

exports.login = async(req,res)=>{
    //1.if email is right
    try{
        const {email,password} = req.body
        const findUser = await User.findOne({email})
        if(!findUser){
            return res.status(200).json({message:"Email or Password is incorrect!"})

        }
    //1.password is correct
    const comparePassword = await bcrypt.compare(password,findUser.password)
    if(comparePassword == false){
        return res.status(200).json({message:"Email or Password is incorrect!"})
    }

    const token = jwt.sign({
        id:findUser._id,
        email:findUser.email
    },process.env.JWT_SECRET,{expiresIn:"1d"})
    console.log(token)

        res.status(200).json({message:"You have logged in",token})
    }catch(e){
        res.status(200).json({message:"Error"})

    }
}

exports.signup = async(req,res)=>{

    try{
        //1.check that email is not taken

        const{email,password} = req.body
        const findUser = await User.findOne({email})
        if(findUser){
           return res.status(400).json({message:"Email is already taken"})
        }
        //2. password encryption

        const hashedPassword = await bcrypt.hash(password,10)
        req.body.password = hashedPassword
    
        await User.create(req.body)
        res.status(200).json({message:"You have created account"})

    }catch{
        res.status(400).json({message:"Oops we have error!"})
    }
   
 }

 exports.protect = (req,res,next)=>{
    try{
        
        const token = req.headers.authorization
        if(!token){
            return res.status(401).json({message:"you are not logged in!"})
        }
        jwt.verify(token,process.env.JWT_SECRET,function(err,decoded){
            if(err){
                return res.status(401).json({message:"please log in again"})
            }
            req.user = {
                id:decoded.id,
                email:decoded.email
            }
            // console.log(decoded)
        })

        next()
    }catch(e){

    }
 }