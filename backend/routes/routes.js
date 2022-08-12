const routes = require('express').Router()

// routes.use('/courses')
// routes.use('/office')
// routes.use('/users')
// routes.use('/semester')
routes.use('/research', require('./researchRoutes'))
routes.use('/role', require('./roleRoutes'))


module.exports = routes