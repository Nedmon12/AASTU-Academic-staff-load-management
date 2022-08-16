const Sequelize = require('sequelize')

//models
const Staff = require('../models/Staff')
const Research = require('../models/Research')
const Staff_Research = require('../models/Staff_Research')

//ADD RESEARCH WITH STAFF
exports.addStaffResearch = async (req, res, next) => {
    const { staff, research, role } = req.body
    try {
        const addedStaffResearch = await Staff_Research.create({
            staff_id: staff,
            research_id: research,
            role_id: role
        })
        res.status(200).send({ success: "Added successfully" })
    } catch (error) {
        res.status(500).send({ error: "Unable to add to database" })
    }
}

//READ ALL STAFFS FOR A RESEARCH
exports.readStaffsForResearch = async (req, res, next) => {
    const research_id = req.params.id
    try {
        const staffsForResearch = await Research.findAll({
            where: {
                id: research_id
            },
            include: Staff
        })
        res.setHeader('content-type', 'application/json')
        res.send(JSON.stringify(staffsForResearch))
    } catch (error) {
        res.status(500).send({ error: "Unable to fetch from database" })
    }
}


//READ ALL RESEACH OF A STAFF
exports.readResearchOfStaff = async (req, res, next) => {
    const staff_id = req.params.id
    try {
        const researchOfStaff = await Staff.findAll({
            where: {
                id: staff_id
            },
            include: Research
        })
        res.setHeader('content-type', 'application/json')
        res.send(JSON.stringify(researchOfStaff))
    } catch (error) {
        res.status(500).send({ error: "Unable to fetch from database" })
    }
}