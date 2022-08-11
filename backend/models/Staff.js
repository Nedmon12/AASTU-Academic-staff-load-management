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

Position.hasMany(Staff, {
    foreignKey: 'position_id'
})
Staff.belongsTo(Position, {
    foreignKey: 'position_id'
})

Rank.hasMany(Staff, {
    foreignKey: 'rank_id'
})
Staff.belongsTo(Rank, {
    foreignKey: 'rank_id'
})

Status.hasMany(Staff, {
    foreignKey: 'status_id'
})
Staff.belongsTo(Status, {
    foreignKey: 'status_id'
})

Office.hasMany(Staff, {
    foreignKey: 'department'
})
Staff.belongsTo(Office, {
    foreignKey: 'department'
})

module.exports = Staff