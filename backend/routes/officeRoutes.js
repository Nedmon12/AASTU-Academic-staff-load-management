const express = require('express')
const router = express.Router()
const officeController = require('../controllers/officeController')

 router.post('/office/add',officeController.OfficeControl.add)
 router.post('/office/update',officeController.OfficeControl.update)
 router.get('/office/read',officeController.OfficeControl.read)
 router.post('/hierarchy/add',officeController.HierarchyControl.add)
 router.post('/hierarchy/update1',officeController.HierarchyControl.update1)
 router.post('/hierarchy/update2',officeController.HierarchyControl.update2)
 router.get('/hierarchy/read',officeController.HierarchyControl.read)
  router.post('/approval/add',officeController.ApprovalControl.add)
 router.post('/approval/update',officeController.ApprovalControl.update)
 router.get('/approval/read',officeController.ApprovalControl.read)

// router.post('/register', userController.registerUser)
// router.get('/logout', userController.logout)
module.exports = router