'use strict';
const Right = require('../Right');
const Left = require('../Left');

const tryCatch = f => {
  try {
    return Right(f());
  } catch (e) {
    return Left(e);
  }
}

module.exports = tryCatch;