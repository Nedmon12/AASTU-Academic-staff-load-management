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
})

Section.hasMany(Group, {
    foreignKey: 'section_id'
})
Group.belongsTo(Section, {
    foreignKey: 'section_id'
})

module.exports = Group