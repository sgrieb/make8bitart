'use-strict';

var fs = require('fs');
var Frame = require('./frame');

// constructor
function MatrixService (matrix) {
    this.matrix = matrix;
    this.config = JSON.parse(fs.readFileSync(__dirname + '/../data/config.json'));

    // turn pxon to frame
    this.defaultFrame = new Frame(JSON.parse(fs.readFileSync(__dirname + '/../data/'+ this.config.default +'.json')));
    var a = 1;
};

MatrixService.prototype.setFrame = function (frame) {
    if(frame){
        setPixels(frame, this.matrix);
    }
    else{
        setPixels(this.defaultFrame, this.matrix);
    }

    function setPixels(frame, matrix) {
        frame.pxon.forEach(function(val){
            matrix.setPixel(val.x, val.y, val.rgba.R, val.rgba.G, val.rgba.B, val.rgba.A);
        });
    }
}

module.exports = MatrixService;