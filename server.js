const express = require('express')
const dotenv = require('dotenv').config()
const db_coll = require('./backend/config/db_collection')

const db = require('./backend/config/database')
const models = require('./backend/model/index')
//edit to user routes
const bodyParser = require('body-parser')
const routes = require('./backend/routes/routes')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use('/api',routes)

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
