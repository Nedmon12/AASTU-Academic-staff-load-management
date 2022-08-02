const express = require('express')
const dotenv = require('dotenv').config()

const app = express()

const port = process.env.PORT || 5000

app.listen(process.env.PORT||5000,()=> {
    console.log("App running on http://localhost:" + port)
})