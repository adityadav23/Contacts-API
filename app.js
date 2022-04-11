const express = require('express')

const contactRouter = require('./routes/contacts.routes')
const app = express()


app.use(express.json())

app.use('/api/v1/contact', contactRouter)

module.exports =  app