'use strict';

const Right = require('../Right');
const Left = require('../Left');

const Maybe = x => x != null ? Right(x) : Left(null);

module.exports = Maybe;
