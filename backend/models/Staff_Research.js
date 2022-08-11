const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const Staff = require('./Staff')
const Research = require('./Research')
const Role = require('./Role')

const Staff_Research = db.define('Staff_Research', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
})

Staff.belongsToMany(Research, {
    foreignKey: 'staff_id',
    through: Staff_Research
})
Research.belongsToMany(Staff, {
    foreignKey: 'research_id',
    through: Staff_Research
})

Role.hasMany(Staff_Research, {
    foreignKey: 'role_id'
})
Staff_Research.belongsTo(Role, {
    foreignKey: 'role_id'
})

module.exports = Staff_Research