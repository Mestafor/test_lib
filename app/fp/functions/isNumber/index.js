'use strict';
const curry = require('../curry');
const is = curry(require('../is'));

const isNumber = is((n) => !isNaN(parseFloat(n)) && isFinite(n));

module.exports = isNumber;