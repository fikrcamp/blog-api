
const login = (req, res) => {
    res.status(200).json({message: 'Please Login'})
}

const signup = (req, res) => {
    res.status(200).json({message: "Please Signup"})
}


module.exports = {
    login,
    signup,
}