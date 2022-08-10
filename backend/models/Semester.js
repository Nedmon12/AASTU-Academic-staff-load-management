const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const Semester = db.define('Semester', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    academic_year: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    semester_term: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
})

module.exports = Semester