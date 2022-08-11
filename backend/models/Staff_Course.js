const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const Course = require('./Course')
const Staff = require('./Staff')
const Semester = require('./Semester')

const Staff_Course = db.define('staff_course', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
})

Staff.belongsToMany(Course, {
    foreignKey: 'staff_id',
    through: Staff_Course
})
Course.belongsToMany(Staff, {
    foreignKey: 'course_id',
    through: Staff_Course
})

Semester.hasMany(Staff_Course, {
    foreignKey: 'semester_id'
})
Staff_Course.belongsTo(Semester, {
    foreignKey: 'semester_id'
})

module.exports = Staff_Course

