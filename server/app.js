'use strict';

require('dotenv').config();
var LedMatrix;

// mock the led matrix during development
if (process.env.DEVELOPMENT) {
    LedMatrix = require("./matrix-mock");
}
else {
    LedMatrix = require("node-rpi-rgb-led-matrix");
}

var express = require('express');
var path = require('path');
var fs = require("fs");
var bodyParser = require('body-parser');

var app = express();

// parse bodies as json
app.use(bodyParser.json());

// host static files
app.use('/', express.static(path.join(__dirname, '../client')));

// post files
app.post('/pxon', function (req, res) {
    fs.writeFileSync(path.join(__dirname, './pxon/test.json'), JSON.stringify(req.body), function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    }); 
    res.send('Oh hey!');
});

console.log('Server started!');

// turn on the matrix!

var matrix = new LedMatrix();
matrix.fill(255, 50, 100);
matrix.setPixel(0, 0, 0, 50, 255);

app.listen(3000);