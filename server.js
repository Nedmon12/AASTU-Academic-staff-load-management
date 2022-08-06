const express = require('express')
const dotenv = require('dotenv').config()

const db = require('./backend/config/database')
const models = require('./backend/model/index')

const app = express()

const port = process.env.PORT || 5000

//Test database connection
db.authenticate()
.then(() => console.log('DATABASE CONNECTED SUCCESSFULLY'))
.catch(err => console.log(err))

db.sync({force: true})
.then(() => {
    app.listen(port, console.log("App running on http://localhost:" + port))
})
.catch(err => console.log('sync err: ', err))
