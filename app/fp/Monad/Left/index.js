const Left = x => ({
  ap: monad => {
    return monad.map(x)
  },
  chain: f => Left(x),
  map: f => Left(x),
  fold: (f, g) => f(x),
  concat: o => Left(x),
  inspect: () => `Left(${x})`
});

module.exports = Left;
