'use-strict';

var _ = require('lodash');

// constructor
function Frame (pxon){
    this.height = 32;
    this.width = 32;

    if(pxon){
        this.pxon = pxon;

        // sort pxon by default
        _.sortBy(pxon, ['x', 'y']);

        console.log(pxon);
    }
};

module.exports = Frame;