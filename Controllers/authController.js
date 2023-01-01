

const login = (req, res) => {
    res.status(200).json({ message: "hi iam from the login route" })
}


const signup = (req, res) => {
    res.status(200).json({ message: "hi iam from the signup route" })
}


module.exports = { login, signup }