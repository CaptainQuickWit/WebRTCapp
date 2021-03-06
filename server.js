const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const {v4: uuidV4} = require('uuid')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.redirect(`/${uuidV4()}`)
    //28822d02-a3b5-49d8-a40b-0963459283ad


})

io.on('connection', socket => {
    socket.on('join-room', (roomId, userId) => {
        console.log(roomId,userId)
    })
})

app.get('/:room', (req,res) => {
    res.render('room', {roomId: req.params.room})
})

server.listen(3000)