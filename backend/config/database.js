const dotenv = require("dotenv").config();
const Sequelize = require("sequelize");

const database_name = process.env.DATABASE_NAME;
const database_username = process.env.DATABASE_USERNAME;
//const database_password = process.env.DATABASE_PASSWORD;
const database_host = process.env.DATABASE_HOST;

const sequelize = new Sequelize("alms", "root", "", {
  host: "localhost",
  dialect: "mysql",
  define: { freezeTableName: true },
});

module.exports = sequelize;
