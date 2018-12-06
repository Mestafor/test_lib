'use strict';

const LazyBox = g => ({
  ap: b2 => b2.map(x),
  map: f => LazyBox(() => f(g())),
  fold: f => f(g()),
  inspect: () => `LazyBox(${g()})`
});

// .map - Functor
// .of, .chain - Monada
// .ap - Applicative Functor 

const Box = x => ({
  ap: b2 => b2.map(x),
  chain: f => f(x),
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`
});
Box.of = x => Box(x);

// const add = x => y => x + y;
// const sum1 = Box(add).ap(Box(1)).ap(Box(2));
// const sum2 = Box.of(1).map(add).ap(Box(2));
// const res = Box(x => x + 1).ap(Box(2));
// console.log(res, sum1, sum2);

// const res2 = LazyBox(() => [1, 2, 3])
//   .map((array) => array.shift() && array)
//   .map((array) => array.shift() && array)
//   .map((array) => {
//     return array;
//   });

// console.log(res2);