'use strict';

const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;

const port = process.env.PORT ||3000;

mongoose.connect('mongodb://admin:admin@ds013946.mlab.com:13946/customers', (err) => {
    err ? console.error(err) : console.log('mongo connected');
});

const app = express();
const server = require('http').createServer(app);
app.use(express.static(__dirname + '/bundle'));

// apply this rule to all requests accessing any URL/URI
app.all('*', function(req, res, next) {
    // add details of what is allowed in HTTP request headers to the response headers
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials', false);
    res.header('Access-Control-Max-Age', '86400');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    // the next() function continues execution and will move onto the requested URL/URI
    next();
});
require('./server/config/express')(app);
require('./server')(app);

app.listen(port, (err) => {
    err ? console.error(err) : console.log('Express server listening on port ' + port);
});