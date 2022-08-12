const Sequelize = require('sequelize')

//models
const Research = require('../models/Research')
const Office = require('../models/Office')
//ADD RESEARCH
exports.addResearch = async (req, res, next) => {
    const { grantCode, title, summary, startDate, endDate, type, institution, attachment, approved, officeId } = req.body
    try {
        const addedResearch = await Research.create({
            grant_code: grantCode,
            title: title,
            summary: summary,
            start_date: startDate,
            end_date: endDate,
            type: type,
            institution: institution,
            attachment: attachment,
            approved: approved,
            office_id: officeId
        })
    } catch (err) {
        res.status(500).send({ error: "Unable to add to database" })
    }
}

//UPDATE RESEARCH
exports.updateResearch = async (req, res, next) => {
    const id = req.params.id
    const { grantCode, title, summary, startDate, endDate, type, institution, attachment, approved, officeId } = req.body
    try {
        const updatedResearch = await Research.update({
            grant_code: grantCode,
            title: title,
            summary: summary,
            start_date: startDate,
            end_date: endDate,
            type: type,
            institution: institution,
            attachment: attachment,
            approved: approved,
            office_id: officeId
        },
            {
                where: {
                    id: id
                }
            })
    } catch (err) {
        res.status(500).send({ error: "Unable to update to database" })
    }
}

//READ RESEARCH
exports.readResearch = async (req, res, next) => {
    try {
        const allResearch = await Research.findAll({
            include: Office
        })
        res.send(JSON.stringify(allResearch))
    } catch (err) {
        res.status(500).send({ error: "Unable to fetch from database" })
    }
}

//READ SPECIFIC RESEARCH
exports.readSpecificResearch = async (req, res, next) => {
    const id = req.params.id
    try {
        const allResearch = await Research.findAll({
            include: Office,
            where: {
                id: id
            }
        })
        res.send(JSON.stringify(allResearch))
    } catch (err) {
        res.status(500).send({ error: "Unable to fetch from database" })
    }
}