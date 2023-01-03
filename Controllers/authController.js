// login controller

exports.login = (req, res) => {
  res.status(200).json({ message: "request from login" });
};

// signup controller

exports.signup = (req, res) => {
  res.status(200).json({ message: "request from signUp" });
};
