'use strict';
const curry = require('../curry');
const is = curry(require('../is'));

const isObject = is((n) => (typeof n === "object") && (n !== null));

module.exports = isObject;