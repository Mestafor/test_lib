'use strict';
const curry = require('../curry');

const trace = curry(function(tag, x){
  console.log(tag, x);
  return x;
});

module.exports = trace;
