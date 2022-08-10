const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const Office = require('./Office')
const Semester = require('./Semester')

const Batch = db.define('Batch', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    batch_year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    department: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    semester_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    program_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    admission_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
})

Office.hasMany(Batch, {
    foreignKey: {
        name: 'department'
    }
})

Semester.hasMany(Batch, {
    foreignKey: {
        name: 'semester_id'
    }
})

module.exports = Batch