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

app.get('/', (req, res) => {
    res.send('Hi I am working fine');
});

const category = require('./routes/categoryrouter');

app.use('/category', category);

module.exports = app;