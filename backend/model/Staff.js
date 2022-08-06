const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const Staff = db.define('staff', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    department: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    rank_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    position_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    qualifications: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    start_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    end_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
})

module.exports = Staff