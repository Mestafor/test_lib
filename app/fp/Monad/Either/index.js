// const Either = Left || Right;
'use strict';

const Right = require('../Right');
const Left = require('../Left');

const Either = x => x ? Right(x) : Left(null);

module.exports = Either;



// const Success = x => ({
//   ap: monad => monad.map(x),
//   chain: f => f(x),
//   map: f => Success(f(x)),
//   fold: (f, g) => g(x),
//   concat: o => o.fold(e => Left(e), r => Success(x.concat(r))),
//   inspect: () => `Success(${x})`
// });

// const Fail = x => ({
//   ap: monad => {
//     return monad.map(x.concat(monad.fold(y=>y, y => y)))
//   },
//   chain: f => Fail(x),
//   map: f => Fail(x),
//   fold: (f, g) => f(x),
//   concat: o => Fail(x),
//   inspect: () => `Fail(${x})`
// });

// const tryCatch = f => {
//   try {
//     return Right(f());
//   } catch (e) {
//     return Left(e);
//   }
// }

// const findColor = name => Either(({
//   green: 'green',
//   blue: 'blue',
//   red: 'red'
// })[name]);

// const res = Right(3).map(x => x * 2).fold(() => 'error', x => x * 10);
// const res2 = Left(3).map(x => x * 2).fold(() => 'error', x => x * 10);
// const color = findColor('red').map(x => x.toUpperCase()).fold(x => x, x => x);

// const getPort = tryCatch(() => JSON.parse('{"port":3300}')).chain(item => tryCatch(() => JSON.parse('{port:4000}'))).map(item => item.port).fold(e => 3000, x => x);

// //console.log(res, res2, color, getPort);

// Either(undefined).chain(item => tryCatch(() => JSON.parse('{"port":3300}').port * item)).map(item => item / 3).fold(e => console.log('null we have ', e), item => console.log(item));


// // Test applicatives
// const f = x => y => x + y;
// Either(f).ap(Either(1)).ap(Either(null)).fold(console.log, console.log);


// // test form vali
// function isUsernameValid(a) {
//   return /^(0|[1-9][0-9]*)$/.test(a) ? Fail(["Username can't be a number"]) : Right(a)
// }

// function isPwdLengthCorrect(a) {
//   return a.length == 10 ? Right(a) : Fail(["Password must be 10 characters"])
// }

// function ieEmailValid(a) {
//   console.log(a);
//   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//   return re.test(a) ? Right(a) : Fail(["Email is not valid"])
// }

// const f2 = userName => pwd => email => 'success';
// const res3 = Either(f2).ap(isUsernameValid('4'))
//   .ap(isPwdLengthCorrect('1234'))
//   .ap(ieEmailValid('email@gmail.com'))
//   .fold(console.log, console.log);
// //console.log(res3);
