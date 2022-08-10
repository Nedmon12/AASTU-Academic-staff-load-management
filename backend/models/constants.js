const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const constants = db.define('constants', {
    _key: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    _value: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

module.exports = constants