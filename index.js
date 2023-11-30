'use strict';
require('dotenv').config()
const express = require("express")
const bodyParser = require('body-parser')
const cors = require("cors")
const { cacheAndReturnData, fetchWeeklyTrendiMovieApiData } = require('./utils')

const app = express()
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.urlencoded({ extended: true }))
const jsonParser = bodyParser.json()

const port = process.env.PORT || 8080


app.post("/search", jsonParser, async (req, res) => {
  await cacheAndReturnData(req, res)

})

app.get("/", async (req, res) => {
  await fetchWeeklyTrendiMovieApiData(res)
})

app.listen(port, () =>
  console.log(`Listening on port ${port}`))


module.exports = app