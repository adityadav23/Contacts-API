require('dotenv').config()
const http = require('http')
const mongoose = require('mongoose')


const connectDb = require('./db/connect')
const app = require('./app')
const server = http.createServer(app)
const PORT = process.env.PORT || 5000


async function startServer(){
    await connectDb(process.env.MONGO_URI)

    server.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}...`)
    })

}

mongoose.connection.once('open',()=>{
    console.log('MongoDB connection ready!!')
})

mongoose.connection.on('error',(err)=>{
    console.log(err)
})

startServer()