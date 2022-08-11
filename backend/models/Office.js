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
    is_department: {
        type: DataTypes.INTEGER(1),
        allowNull: false
    },
})

Position.hasMany(Office, {
    foreignKey: 'position_id'
})
Office.belongsTo(Position, {
    foreignKey: 'position_id'
})

module.exports = Office