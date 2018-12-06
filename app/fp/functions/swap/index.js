'use strict';
const curry = require('../curry');

function swap(fn) {
    return (arg1, arg2) => { 
        return fn(arg2, arg1);
    };
}

module.exports = curry(swap);