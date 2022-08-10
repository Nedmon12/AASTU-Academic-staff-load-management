const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const Section = db.define('Section', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    no_of_students: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    no_of_students: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
})

module.exports = Section