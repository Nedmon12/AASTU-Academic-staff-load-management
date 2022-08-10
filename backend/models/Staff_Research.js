const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const Staff = require('./Staff')
const Research = require('./Research')
const Role = require('./Role')

const Staff_Research = db.define('Staff_Research', {
    staff_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    research_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
})

Staff.hasOne(Staff_Research, {
    foreignKey: {
        name: 'staff_id'
    }
})

Research.hasOne(Staff_Research, {
    foreignKey: {
        name: 'research_id'
    }
})

Role.hasOne(Staff_Research, {
    foreignKey: {
        name: 'role_id'
    }
})

module.exports = Staff_Research