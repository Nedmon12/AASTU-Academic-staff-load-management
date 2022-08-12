const router = require('express').Router()
const staffResearchController = require('../controllers/staffResearchController')
// const researchController = require('../controllers/userController')

router.post('/add', staffResearchController.addStaffResearch)
router.get('/staffsForResearch/:id', staffResearchController.readStaffsForResearch)
router.get('/researchOfStaff/:id', staffResearchController.readResearchOfStaff)

module.exports = router