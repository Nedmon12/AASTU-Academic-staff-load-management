const routes = require('express').Router()

// routes.use('/courses')
// routes.use('/office')
// routes.use('/users')
// routes.use('/semester')
routes.use('/research', require('./researchRoutes'))
routes.use('/role', require('./roleRoutes'))
routes.use('/overload_request', require('./overloadRequestRoutes'))

module.exports = routes