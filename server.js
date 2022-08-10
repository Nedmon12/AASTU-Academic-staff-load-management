const express = require('express')
const dotenv = require('dotenv').config()
const db_coll = require('./config/db_collection')

const db = require('./backend/config/database')

const app = express()

const port = process.env.PORT || 5000

//Test database connection
db.authenticate()
.then(() => console.log('DATABASE CONNECTED SUCCESSFULLY'))
.catch(err => console.log(err))

db.sync({force: false})
.then(() => {
    app.listen(port, console.log("App running on http://localhost:" + port))
})
.catch(err => console.log('sync err: ', err))
