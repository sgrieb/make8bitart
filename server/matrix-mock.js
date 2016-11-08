'use-strict';

// constructor
function MatrixMock (){};

MatrixMock.prototype.fill = function (red, green, blue) {
    console.log('Filling with : RGB(' + red + ', ' + green + ', ' + blue + ')');
}

MatrixMock.prototype.setPixel = function (x, y, red, green, blue) {
    console.log('Set pixel ' + x + ', ' + y + ' :  RGB(' + red + ', ' + green + ', ' + blue + ')');
}

module.exports = MatrixMock;