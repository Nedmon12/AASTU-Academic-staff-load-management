const router = require('express').Router()
const researchController = require('../controllers/researchController')
// const researchController = require('../controllers/userController')

router.post('/add', researchController.addResearch)
router.post('/update/:id', researchController.updateResearch)
router.get('/read', researchController.readResearch)
router.get('/read/:id', researchController.readSpecificResearch)


// router.post('/login',userController.login)
// router.post('/register', userController.registerUser)
// router.get('/logout', userController.logout)

module.exports = router