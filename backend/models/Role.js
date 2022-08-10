const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const Role = db.define('Role', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role_load: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
})

module.exports = Role