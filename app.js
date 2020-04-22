const express = require('express')

const fs = require('fs')

const app = express()

app.get('/PING', function (req, res) {
    console.log('Someone wants to get /PING!')
    res.send('PONG')
})

app.get('/my-name', function (req, res) {
    console.log('Someone wants to get my name!')
    res.send('Cole')
})  

app.listen(5000, function () {
    console.log('Server is running!')
})

