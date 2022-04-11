const express = require('express')

const auth = require('./middleware/authentication')

const contactRouter = require('./routes/contacts.routes')
const userRouter = require('./routes/users.routes')
const app = express()


app.use(express.json())

app.use('/api/v1', userRouter)
app.use('/api/v1/contact',auth ,contactRouter)

module.exports =  app