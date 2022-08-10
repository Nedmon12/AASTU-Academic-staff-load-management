const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const Course = require('./Course')
const Curriculum = require('./Curriculum')
const Semester = require('./Semester')

const Course_Curriculum = db.define('course_curriculum', {
    course_code: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    curriculum_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    semester_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
})

Course.hasMany(Course_Curriculum, {
    foreignKey: {
        name: 'course_code'
    }
})

Curriculum.hasMany(Course_Curriculum, {
    foreignKey: {
        name: 'curriculum_id'
    }
})

Semester.hasMany(Course_Curriculum, {
    foreignKey: {
        name: 'semester_id'
    }
})

module.exports = Course_Curriculum