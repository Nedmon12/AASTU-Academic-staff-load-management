const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const Office = require('./Office')

const Course = db.define('Course', {
    course_code: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    course_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    credit_hr: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    lecture: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    lab: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    tutorial: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    advisory: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    mentoring: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    total_leh: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    disabled: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
    },
})

Office.hasMany(Course, {
    foreignKey: {
        name: 'owner'
    }
})
Course.belongsTo(Office, {
    foreignKey: {
        name: 'owner'
    }
})

module.exports = Course