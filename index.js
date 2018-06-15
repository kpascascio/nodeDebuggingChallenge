const express = require('express');
const app = express(); 
const bodyParser = require('body-parser')
const DB = require('./db')
app.use(bodyParser.json())
app.use('/api/user', require('./controller'))

DB.sync();

app.listen(3000, () => {
    console.log('The server is working!')
})

/**
 * There are 4 errors in this file
 */