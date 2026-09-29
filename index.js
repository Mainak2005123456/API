 const express = require('express');

const app = express();

app.use(express.json());

const mongoose = require('mongoose');

require('dotenv').config({ override: true, debug: false });

const mongoURI = process.env.MONGODB_URL;

mongoose.connect(mongoURI)
    .then(() => {
        console.log('Connection established with MONGODB');
    })
    .catch((err) => {
        console.log('Connection Error ' + err);
    });

const category = require('./routes/categoryrouter');

app.get('/', (req, res) => {
    res.send('My CRUD API');
});


app.use('/category', category);
app.listen(3000, () => {
    console.log('Server started in port number 3000');
});