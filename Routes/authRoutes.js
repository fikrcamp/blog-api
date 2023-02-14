
const express = require('express');
const multer = require('multer')

const router = express.Router()

const authController = require("../Controllers/authController")

const Storage = multer.diskStorage({
    destination:'uploads',
    filename:(req, file, cb)=>{
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage: Storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
}).single('file')

router.route("/auth/login").post(authController.login)

router.route("/auth/signup").post(authController.signup)

router.route("/auth/fill/:id").put(authController.protect, upload, authController.profile)

router.route("/auth/change/:id").put(authController.protect, authController.changePass)

router.route("/auth/user").get(authController.protect ,authController.user)

router.route("/auth/userProfile/:id").get(authController.userProfile)




module.exports = router