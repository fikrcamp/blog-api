const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "blogImages/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const blogUpload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg"
    )
      cb(null, true);
    else {
      cb(null, false);
      console.log("only png , jpeg or jpg is allowed!!");
      return new Error("only png , jpeg or jpg is allowed!!");
    }
  },
});

module.exports = blogUpload;
