const router = require('express').Router()
const overloadRequestController = require('../controllers/overloadRequestController')
// const researchController = require('../controllers/userController')

router.post('/add', overloadRequestController.addOverloadRequest)
// router.post('/update/:id', overloadRequestController.updateResearch)
router.get('/read', overloadRequestController.readOverloadRequest)
router.get('/read/:id', overloadRequestController.readSpecificOverloadRequest)

module.exports = router