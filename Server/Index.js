require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')



const {seed, getBoxers, addVote} = require('./controller.js')



app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Front-End/index.html'))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../Front-End/index.css'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../Front-End/main.js'))
})

app.get('/getboxers', getBoxers)

app.post('/seed,', seed)
app.post('/addvote', addVote)



const port = process.env.PORT || 4005

app.listen(port, () => console.log(`up on ${port}`))

