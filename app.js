
// import the express package and save as app
const express = require('express');
const app = express();

//import mongoose
const mongoose = require('mongoose');

//get dotenv package
require('dotenv/config');

//get body parser
const bodyParser = require('body-parser');

//Middlewares
app.use('/posts', () => {
    console.log('This is a middleware running.');  //testing...
})

app.use(bodyParser.json()); //Uses the body parser

//Import Routes
const homeRoute = require('./home'); // /home is another page
app.use('/', homeRoute);  //posts has its own routing


//Connect to DB (mLab sandbox, 'yche..., name#6')
mongoose.connect(process.env.DB_CONNECTION, () => {console.log('Connected to DB!')});

// server bootup and start listenning
const port = 8080;
app.listen(port); 
console.log(`Listenning on port ${port}`);