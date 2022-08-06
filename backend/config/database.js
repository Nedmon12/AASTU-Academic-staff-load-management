const dotenv = require('dotenv').config()
const Sequelize = require('sequelize')

const database_name = process.env.DATABASE_NAME
const database_username = process.env.DATABASE_USERNAME
const database_password = process.env.DATABASE_PASSWORD
const database_host = process.env.DATABASE_HOST


const sequelize = new Sequelize(database_name, database_username, database_password, {
    host: database_host,
    dialect: 'mysql',
    define: { freezeTableName: true }
});

module.exports = sequelize