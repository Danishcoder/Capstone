require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')

const {SERVER_PORT} = process.env

const {seed, getBoxers, addVote} = require('./controller.js')



app.use(express.json())
app.use(cors())



app.get('/getboxers', getBoxers)

app.post('/seed,', seed)
app.post('/addvote', addVote)



const port = process.env.PORT || 4005

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))

