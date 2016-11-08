'use strict';

require('dotenv').config();
var WebServer = require("./webserver");

var LedMatrix;

// mock the led matrix during development
if (process.env.DEVELOPMENT) {
    LedMatrix = require("./matrix-mock");
}
else {
    LedMatrix = require("node-rpi-rgb-led-matrix");
}

// start the webserver
var webserver = new WebServer();
webserver.start();

// turn on the matrix!
var matrix = new LedMatrix();
matrix.fill(255, 50, 100);
matrix.setPixel(0, 0, 0, 50, 255);