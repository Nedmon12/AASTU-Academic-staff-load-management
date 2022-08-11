const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const Position = require('./Position')
const Semester = require('./Semester')

const Approval = db.define('Approval', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    }
})

Position.belongsToMany(Position, {
    as: 'sender',
    foreignKey: 'sender',
    through: Approval
})
Position.belongsToMany(Position, {
    as: 'reciever',
    foreignKey: 'receiver',
    through: Approval
})

Semester.hasMany(Approval, {
    foreignKey: 'semester_id'
})
Approval.belongsTo(Semester, {
    foreignKey: 'semester_id'
})

module.exports = Approval