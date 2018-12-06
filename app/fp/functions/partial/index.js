'use strict';

function partial(fn, ...args) {
    return (...rest) => {
        let fullArgs = args.map(arg => arg === undefined ? rest.shift() : arg);
        return fn(...fullArgs, ...rest)
    };
}

module.exports = partial;