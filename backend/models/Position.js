const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const Position = db.define('Position', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    position_load: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
})

module.exports = Position