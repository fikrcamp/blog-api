const login = (req, res) => {
  res.status(200).json({ message: "login your account" });
};

const signUp = (req, res) => {
  res.status(200).json({ message: "signUp your account " });
};

module.exports = { login, signUp };
