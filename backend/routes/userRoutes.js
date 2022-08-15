const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.post('/login',userController.login)
router.post('/register', userController.registerUser)
router.get('/logout', userController.logout)
router.get('/delete/:userId')
router.get('/update/:userId')
//staff routes
//get every staff
router.get('/staff',userController.getStaff)
router.post('/staff/create')
router.get('/staff/delete/:staffId')
//status routes
//get status table
router.get('/status', userController.getStatus)
//add middleware to ensure only top level clearance can access this
router.get('/status/update/:statusId')
//rank routes
//get rank table
router.get('/rank', userController.getRank)
router.get('/rank/update/:raknId')
//position routes
//get position table
router.get('/position', userController.getPosition)
//send data over req.body over param??
router.post('/position/create')
router.post('/position/update/:positionId')
module.exports = router