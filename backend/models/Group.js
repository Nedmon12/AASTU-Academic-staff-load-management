const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const Section = require('./Section')

const Group = db.define('Group', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    section_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
})

Section.hasMany(Group, {
    foreignKey: {
        name: 'section_id'
    }
})

module.exports = Group