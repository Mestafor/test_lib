'use strict';
const curry = require('../curry');
const is = curry(require('../is'));

const isString = is(value => typeof value === 'string');

module.exports = isString;