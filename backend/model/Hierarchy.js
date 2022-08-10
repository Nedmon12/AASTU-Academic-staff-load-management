const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const Office = require('./Office')

const Hierarchy = db.define('Hierarchy', {
    parent: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    child: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
})

Office.hasMany(Hierarchy, {
    foreignKey: {
        name: 'parent'
    }
})

Office.hasMany(Hierarchy, {
    foreignKey: {
        name: 'child'
    }
})

module.exports = Hierarchy