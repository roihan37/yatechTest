const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT
const router = require("./routes")

const errHandler = require('./middleware/errorHandler')
app.use(express.json())
app.use(express.urlencoded({extended : false}))


app.use(router)
app.use(errHandler)


app.listen(port, () => {
  console.log(`Example app listening on port ${port || 3000}`)
})