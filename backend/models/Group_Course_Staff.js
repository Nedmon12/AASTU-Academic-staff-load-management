const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const Course = require('./Course')
const Group = require('./Group')
const User = require('./User')
const Staff = require('./Staff')

const Group_Course_Staff = db.define('Group_Course_Staff', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    course_code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    group_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    staff_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    assigner: {
        type: DataTypes.STRING,
        allowNull: false
    },
    leh: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
})

Course.hasMany(Group_Course_Staff, {
    foreignKey: {
        name: 'course_code'
    }
})

Group.hasMany(Group_Course_Staff, {
    foreignKey: {
        name: 'group_id'
    }
})

User.hasMany(Group_Course_Staff, {
    foreignKey: {
        name: 'assigner'
    }
})

Staff.hasMany(Group_Course_Staff, {
    foreignKey: {
        name: 'staff_id'
    }
})

module.exports = Group_Course_Staff