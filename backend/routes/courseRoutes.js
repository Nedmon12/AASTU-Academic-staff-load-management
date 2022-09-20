const express = require("express");
const router = express.Router();

//const courseController = require('../controllers/userController')

// router.post('/login',userController.login)
// router.post('/register', userController.registerUser)
// router.get('/logout', userController.logout)
router.get("/", require("./../controllers/courseController").getCourses);
router.post(
  "/addCourse",
  require("./../controllers/courseController").addCourse
);

module.exports = router;
