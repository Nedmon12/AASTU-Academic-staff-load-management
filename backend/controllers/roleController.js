const Sequelize = require('sequelize')

//models
const Role = require('../models/Role')

//ADD ROLE
exports.addRole = async (req, res, next) => {
    const { type, roleLoad } = req.body
    try {
        const addedRole = await Role.create({
            type: type,
            role_load: roleLoad
        })
        res.status(200).send({ success: "Added successfully" })
    } catch (err) {
        res.status(500).send({ error: "Unable to add to database" })
    }
}

//UPDATE ROLE
exports.updateRole = async (req, res, next) => {
    const id = req.params.id
    const { type, roleLoad } = req.body
    try {
        const updatedRole = await Role.update({
            type: type,
            role_load: roleLoad
        },
            {
                where: {
                    id: id
                }
            })
        res.status(200).send({ success: "Updated successfully" })
    } catch (err) {
        res.status(500).send({ error: "Unable to update to database" })
    }
}

//READ ROLES
exports.readRole = async (req, res, next) => {
    try {
        const allRoles = await Role.findAll()
        res.setHeader('content-type', 'application/json')
        res.send(JSON.stringify(allRoles))
    } catch (err) {
        res.status(500).send({ error: "Unable to fetch from database" })
    }
}

//READ SPECIFIC ROLE    
exports.readSpecificRole = async (req, res, next) => {
    const id = req.params.id
    try {
        const allRoles = await Role.findAll({
            where: {
                id: id
            }
        })
        res.setHeader('content-type', 'application/json')
        res.send(JSON.stringify(allRoles))
    } catch (err) {
        res.status(500).send({ error: "Unable to fetch from database" })
    }
}