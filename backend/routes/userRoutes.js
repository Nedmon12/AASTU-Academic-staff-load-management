const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.post('/login',userController.login)
router.post('/register', userController.registerUser)
router.get('/logout', userController.logout)

module.exports = router