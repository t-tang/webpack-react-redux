const express = require('express')
const path = require('path')
const app = express()
app.use(express.static('dist'))
// react-router
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname + '/dist/index.html'))
});
app.listen(8080)