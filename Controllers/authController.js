const User = require("../Models/UserModel")

const login = (req, res) => {
    res.status(200).json({ message: "you've logged in " })
}


const signup = async(req, res) => {

    try{
        await User.create(req.body).then(()=>{
            res.status(200).json({ message: "you've created successfully" })
        })
    
    }catch{
        res.status(200).json({ message: "OOPS!!!!!" })
    }

}


module.exports = { login, signup }