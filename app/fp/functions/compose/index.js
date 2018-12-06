'use strict';

/**
 * @param {Function[]}
 * @return {*}
 */
function compose(...fns) {
  return (args) => {
    let result = args;
    for (let fn of [...fns].reverse()) {
      result = fn(result);
    }

    return result;
  }
};

module.exports = compose;
