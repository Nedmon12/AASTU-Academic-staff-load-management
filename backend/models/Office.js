const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const Position = require('./Position')

const Office = db.define('Office', {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    position_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    is_department: {
        type: DataTypes.INTEGER(1),
        allowNull: false
    },
})

Position.hasOne(Office, {
    foreignKey: {
        name: 'position_id'
    }
})

module.exports = Office