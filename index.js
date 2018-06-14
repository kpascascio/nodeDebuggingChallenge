const express = Require('express');
const app = express(); 
const bodyParser = require(body-parser)
const DB = require('./db')

app.use('/api/user', require('./controller'))
app.use(bodyParser.json())
DB.sync()(app);

app.listen('3000', () => {
    console.log('The server is working!')
})

/**
 * There are 4 errors in this file
 */