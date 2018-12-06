'use strict';

/**
 * 
 * @param {Function} fn
 * @return {Function | any} 
 */
function curry(fn) {
  return function curried(...args) {
    if (args.length < fn.length) {
      return (...next) =>
        curried(...args, ...next);
    }
    return fn(...args);
  }
}

module.exports = curry;