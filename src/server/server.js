const express = require('express');

const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Country = require('./api/models/countriesModel'); //created model loading here
var cors = require('cors');

mongoose.connect('mongodb://localhost/corona');
var db = mongoose.connection;


db.on('error', function callback() {
  console.log("Connection error");
});

db.once('open', function callback() {
  console.log("Mongo working!");
});

// Get our API routes
const api = require('./api/routes/countriesRoutes');

const app = express();
app.use(cors());
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, '../client/dist/client')));

// Set our api routes

api(app); //register the route

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/client/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);


app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));



// var express = require('express');
// var app = express();
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
// var ObjectId = Schema.ObjectId;
// var Factory = require("./module.factory.js");

// mongoose.connect('mongodb://localhost/corona');
// var db = mongoose.connection;


// var factory = new Factory(Schema, mongoose);
// factory.createSchemas();
// factory.insertPeople();


// app.use(express.static(__dirname + '/client/dist/'));



// db.on('error', function callback() {
//     console.log("Connection error");
// });

// db.once('open', function callback() {
//     console.log("Mongo working!");
// });

// app.get('/person/hektor', function (req, res) {
//     var resp = factory.getPerson({ name: 'hektor' }, res);
// });

// app.get('/', function (req, res) {
//     res.render('index', { title: 'Home' })
// })

// app.listen(3000);
// console.log('Listening on port 3000...');
