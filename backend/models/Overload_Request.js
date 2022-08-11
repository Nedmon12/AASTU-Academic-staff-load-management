const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const Staff = require('./Staff')
const Semester = require('./Semester')

const Overload_Request = db.define('Overload_Request', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    department_approval: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
    },
    college_approval: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
    },
    ug_pg_approval: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
    },
    finance_approval: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
    },
})

Staff.hasMany(Overload_Request, {
    foreignKey: 'staff_id'
})
Overload_Request.belongsTo(Staff, {
    foreignKey: 'staff_id'
})

Semester.hasMany(Overload_Request, {
    foreignKey: 'semester_id'
})
Overload_Request.belongsTo(Semester, {
    foreignKey: 'semester_id'
})

module.exports = Overload_Request