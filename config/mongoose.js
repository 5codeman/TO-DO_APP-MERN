const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/to_do_db');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting to db'));

db.once('open', function () {
    console.log("Connected to DB");
});