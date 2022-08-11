const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const Office = require('./Office')

const Curriculum = db.define('Curriculum', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    program_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    admission_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    stream: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    payment_rate: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    starting_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    active: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
    },
})

Office.hasMany(Curriculum, {
    foreignKey: {
        name: 'owner'
    }
})
Curriculum.belongsTo(Office, {
    foreignKey: {
        name: 'owner'
    }
})

module.exports = Curriculum