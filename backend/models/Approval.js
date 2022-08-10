const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const Position = require('./Position')

const Approval = db.define('Approval', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    sender: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    receiver: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})

Position.hasMany(Approval, {
    foreignKey: {
        name: 'sender'
    }
})

Position.hasMany(Approval, {
    foreignKey: {
        name: 'receiver'
    }
})

module.exports = Approval