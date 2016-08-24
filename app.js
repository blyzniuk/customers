'use strict';

const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;

const port = 3000;

mongoose.connect('mongodb://admin:admin@ds013946.mlab.com:13946/customers', (err) => {
    err ? console.error(err) : console.log('mongo connected');
});

const app = express();
const server = require('http').createServer(app);

app.all('/api/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET, POST', 'PUT', 'DELETE');
    next();
});

require('./server/config/express')(app);
require('./server')(app);

app.listen(port, (err) => {
    err ? console.error(err) : console.log('Express server listening on port ' + port);
});