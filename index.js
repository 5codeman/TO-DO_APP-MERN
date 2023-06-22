const express = require('express');
const port = 2023;

const db = require('./config/mongoose');
// const Task = require('./models/task'); // yaha ka TASK controller mai kaise use kare samgh nahi aa rah hai

const app = express();

const bodyParser = require('body-parser'); //for this we have to install it first 
app.use(bodyParser.urlencoded({ extended: false }));

// use express router
app.use('/', require('./routes'));

//for static file
app.use(express.static('assets'));
// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function (err) {
    if (err) {
        console.log(`Error occur during runing the server: ${err}`)
    }
    console.log(`Server is running on port: ${port}`);
});