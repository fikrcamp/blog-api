const express = require('express')
const multer = require('multer');



const router = express.Router()
const blogController = require("../Controllers/blogController")
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

router.route("/blog")
    .get(blogController.allBlogs) 
    .post(authController.protect, upload, blogController.newBlog);

router.route('/blog/my').get(authController.protect, blogController.userBlogs)
router.route('/blog/profile/:id').get(authController.protect, blogController.profileBlog)

router.route("/blog/:id")
    .get(blogController.certainBlog)
    .put(authController.protect, upload, blogController.updateBlog)
    .delete(authController.protect, blogController.deleteBlog)

module.exports = router