const routes = require('express').Router()
const courseroutes = require('./courseRoutes')
routes.use('/courses',courseroutes)
// routes.use('/office')
// routes.use('/users')
// routes.use('/semester')
// routes.use('research',)


module.exports = routes