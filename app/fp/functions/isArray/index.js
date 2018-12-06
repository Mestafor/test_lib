'use strict';
const curry = require('../curry');
const is = curry(require('../is'));

const isArray = is(n => Array.isArray(n));

module.exports = isArray;