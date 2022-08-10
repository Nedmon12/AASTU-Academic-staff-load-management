const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const Status = db.define('Status', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    max_load: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    expected_load: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
})

module.exports = Status