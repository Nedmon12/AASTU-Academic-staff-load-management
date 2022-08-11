const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const Staff_Course = require('./Staff_Course')
const Group = require('./Group')
const Staff = require('./Staff')

const Staff_Course_Group = db.define('Staff_Course_Group', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    leh: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
})

Group.belongsToMany(Staff_Course, {
    foreignKey: 'group_id',
    through: Staff_Course_Group
})
Staff_Course.belongsToMany(Group, {
    foreignKey: 'staff_course_id',
    through: Staff_Course_Group
})

Staff.hasMany(Staff_Course_Group, {
    foreignKey: 'assigner'
})
Staff_Course_Group.belongsTo(Staff, {
    foreignKey: 'assigner'
})

module.exports = Staff_Course_Group