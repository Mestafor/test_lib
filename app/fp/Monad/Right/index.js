const Left = require('../Left');

const Right = x => ({
  ap: monad => monad.map(x),
  chain: f => f(x),
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  concat: o => o.fold(e => Left(e), r => Right(x.concat(r))),
  inspect: () => `Right(${x})`
});

module.exports = Right;