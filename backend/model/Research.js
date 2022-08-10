const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const Office = require('./Office')

const Research = db.define('Research', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    grant_code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    summary: {
        type: DataTypes.STRING,
        allowNull: false
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    institution: {
        type: DataTypes.STRING,
        allowNull: false
    },
    office_id: {
        type: DataTypes.STRING,
        allowNull: true
    },
    attachment: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

Office.hasOne(Research, {
    foreignKey: {
        name: 'office_id'
    }
})

module.exports = Research