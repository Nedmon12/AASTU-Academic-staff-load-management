const router = require('express').Router()
const roleController = require('../controllers/roleController')

router.post('/add', roleController.addRole)
router.post('/update/:id', roleController.updateRole)
router.get('/read', roleController.readRole)
router.get('/read/:id', roleController.readSpecificRole)

module.exports = router