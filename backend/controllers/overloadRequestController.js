const Sequelize = require('sequelize')

//models
const Overload_Request = require('../models/Overload_Request')
const Staff = require('../models/Staff')
const Semester = require('../models/Semester')

//ADD OVERLOAD REQUEST
exports.addOverloadRequest = async (req, res, next) => {
    const { staff, semester } = req.body
    try {
        const addedRequest = Overload_Request.create({
            staff_id: staff,
            semester_id: semester
        })
        res.status(200).send({ success: "Added successfully" })
    } catch (err) {
        res.status(500).send({ error: "Unable to add to database" })
    }
}

//UPDATE OVERLOAD REQUEST

//READ OVERLOAD REQUESTS
exports.readOverloadRequest = async (req, res, next) => {
    try {
        const allOverloadRequests = await Overload_Request.findAll({
            include: {Staff, Semester},
        })
        res.setHeader('content-type', 'application/json')
        res.send(JSON.stringify(allOverloadRequests))
    } catch (error) {
        res.status(500).send({ error: "Unable to fetch from database" })
    }
}

//READ SPECIFIC OVERLOAD REQUEST
exports.readSpecificOverloadRequest = async (req, res, next) => {
    const id = req.params.id
    try {
        const overloadRequest = await Overload_Request.findAll({
            include: Semester,
            where: {
                id: id
            }
        })
        res.setHeader('content-type', 'application/json')
        res.send(JSON.stringify(overloadRequest))
    } catch (error) {
        res.status(500).send({ error: "Unable to fetch from database" })
    }
}