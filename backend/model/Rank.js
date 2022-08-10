const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const Rank = db.define('Rank', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    academic_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    payment_rate: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
})

module.exports = Rank