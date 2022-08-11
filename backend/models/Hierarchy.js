const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const Office = require('./Office')

const Hierarchy = db.define('Hierarchy', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
})

Office.belongsToMany(Office, {
    as: 'child',
    foreignKey: 'child',
    through: Hierarchy
})
Office.belongsToMany(Office, {
    as: 'parent',
    foreignKey: 'parent',
    through: Hierarchy
})

module.exports = Hierarchy