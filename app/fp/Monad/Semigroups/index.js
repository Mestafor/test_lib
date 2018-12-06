'use strict';
// Semigroup
const { Map } = require('immutable-ext');

const Sum = x => ({
  x,
  concat: ({x:y}) => Sum(x + y),
  fold: f => f(x),
  inspect: () => `Sum(${x})`
});

Sum.empty =  () => Sum(0);

const All = x => ({
  x,
  concat: ({x:y}) => All(x && y),
  fold: f => f(x),
  inspect: () => `All(${x})`
});

All.empty = () => All(true);

const First = x => ({
  x,
  concat: () => All(x),
  fold: f => f(x),
  inspect: () => `All(${x})`
});

// console.log(Sum.empty().concat(Sum(1).concat(Sum(2)).concat(Sum(3))));
// console.log(All(true).concat(All(true)));
// console.log(First('Alex').concat(All('Mestafor')));

// const obj1 = Map({
//   name: First('Alex'),
//   job: All(true),
//   points: Sum(19)
// });

// const obj2 = Map({
//   name: First('Alex2'),
//   job: All(true),
//   points: Sum(27)
// });

// console.log(obj1.concat(obj2).toJS());