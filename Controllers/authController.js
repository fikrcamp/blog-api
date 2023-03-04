const fs = require("fs");
const User = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const password = async (req, res) => {
  try {
    const { email, id } = req.user;

    // console.log(req.body.newPassword);
    const { oldPassword, newPassword, ConPassword } = req.body;
    const findUser = await User.findOne({ email });

    //checking if they are matching
    const checkingPassword = await bcrypt.compare(
      oldPassword,
      findUser.password
    );
    //checking if they are matching
    if (checkingPassword === false) {
      return res
        .status(400)
        .json({ message: "please correct your previous password" });
    }

    if (ConPassword !== newPassword) {
      return res.status(400).json({ message: "they're not matching" });
    }

    //hashing new password and selecting the old password from my database
    const hashNewPassword = await bcrypt.hash(newPassword, 10);
    //editing the old password
    await User.findByIdAndUpdate(id, { password: hashNewPassword }).then(() => {
      res.status(200).json({ message: "You've changed successfully " });
    });
  } catch (e) {
    res.status(400).json({ message: "Snap!! please try again" });
  }
};

//profile function

const profile = async (req, res) => {
  const { firstName, lastName, location, work, bio } = req.body;

  try {
    const findId = req.user.id;

    const user = await User.findById(findId);
    //
    let imageGetter = "" || user.image;
    if (req.file) {
      imageGetter = req.file.filename;
    }

    //finding Id and updating
    const updated = await User.findByIdAndUpdate(findId, {
      firstName: firstName || user.firstName,
      lastName: lastName || user.lastName,
      location: location || user.location,
      work: work || user.work,
      bio: bio || user.bio,
      image: imageGetter,
    });

    res

      .status(200)
      .json({ message: "you've succesfully changed your profile" });
  } catch (e) {
    res.status(400).json({ message: "couldn't save" });
  }
};

const getUser = async (req, res) => {
  try {
    const data = await User.findById(req.user.id);

    res.status(200).json({ message: "here is your data + image", data });
  } catch (e) {
    res.status(401).json({ message: "SNAPPPPPP!!" });
  }
};

const login = async (req, res) => {
  //if email is right
  try {
    const { email, password } = req.body;
    //finding the email on our database
    const findUser = await User.findOne({ email });

    //if it doesnt returning the incorrect string
    if (!findUser) {
      return res.status(400).json({ message: " the email is incorrect " });
    }
    //checing if password is matching the previous saved one
    const checkingPassword = await bcrypt.compare(password, findUser.password);

    //if is not,, return this message string json
    if (checkingPassword === false) {
      return res.status(400).json({ message: "the password is incorrect " });
    }
    //JWT token making a token
    const token = jwt.sign(
      {
        id: findUser._id,
        email: findUser.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({ message: "you've logged in ", token });
  } catch (e) {
    res.status(400).json({ message: `OOPS something is wrong ` });
  }
};

const signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  //encription password
  //checking if the email exist

  try {
    //checking the email validation

    const checkedUser = await User.findOne({ email });
    //throw this error
    if (checkedUser) {
      return res
        .status(400)
        .json({ message: "sorry this email already taken" });
    }
    //if they are not same automatically passed this below function and render
    //encrypting the password
    const hashedPassword = await bcrypt.hash(password, 10);
    req.body.password = hashedPassword;
    //
    await User.create(req.body);
    res.status(200).json({ message: "you've created successfully" });
  } catch {
    res.status(400).json({ message: "OOPS!!!!! something is wrong try again" });
  }
};

//implementing the token information user middlware
const protect = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: "You've not log in " });
    }

    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      //this error could be if is out dated the token
      if (err) {
        return res.status(400).json({ message: "Please log in again " });
      }

      //and this is the token decrypted
      req.user = {
        id: decoded.id,
        email: decoded.email,
      };
      // console.log(req.user);
    });
  } catch (e) {
    res.status(401).json({ message: e });
  }
  next();
};

module.exports = { login, signup, profile, password, protect, getUser };
