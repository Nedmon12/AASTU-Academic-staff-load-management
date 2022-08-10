const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const Staff = require('./Staff')

const User = db.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    middle_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    authorization_level: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false
    },
    staff_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
})

Staff.hasOne(User, {
    foreignKey: {
        allowNull: true,
        name: 'staff_id'
    }
})

module.exports = User