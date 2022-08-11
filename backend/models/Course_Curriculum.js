const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const Course = require('./Course')
const Curriculum = require('./Curriculum')
const Semester = require('./Semester')

const Course_Curriculum = db.define('course_curriculum', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
})

Course.belongsToMany(Curriculum, {
    foreignKey: 'course_code',
    through: Course_Curriculum
})
Curriculum.belongsToMany(Course, {
    foreignKey: 'curriculum_id',
    through: Course_Curriculum
})

Semester.hasMany(Course_Curriculum, {
    foreignKey: 'semester_id'
})
Course_Curriculum.belongsTo(Semester, {
    foreignKey: 'semester_id'
})

module.exports = Course_Curriculum