exports.login = (req,res)=>{
    res.status(200).json({message:"You have logged in"})
}

exports.signUp = (req,res)=>{
    res.status(200).json({message:"You have created a account"})
}
