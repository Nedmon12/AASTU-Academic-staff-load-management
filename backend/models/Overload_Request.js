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
    staff_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    semester_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
    foreignKey: {
        name: 'staff_id'
    }
})

Semester.hasMany(Overload_Request, {
    foreignKey: {
        name: 'semester_id'
    }
})

module.exports = Overload_Request