const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const Status = require('./Status')
const Rank = require('./Rank')
const Position = require('./Position')
const Office = require('./Office')

const Staff = db.define('Staff', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    department: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    status_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    rank_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    position_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    qualifications: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
})

Position.hasOne(Staff, {
    foreignKey: {
        name: 'position_id'
    }
})

Rank.hasOne(Staff, {
    foreignKey: {
        name: 'rank_id'
    }
})

Status.hasOne(Staff, {
    foreignKey: {
        name: 'status_id'
    }
})

Office.hasOne(Staff, {
    foreignKey: {
        name: 'department'
    }
})

module.exports = Staff