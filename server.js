const express = require('express');
const app = express;

app.get('/', function(req, res) {
    res.json({ 'msg': 'Hello World!'})
});

const port = process.env.port || 3000;
app.listen(port, function () {
    console.log('Server started...')
});