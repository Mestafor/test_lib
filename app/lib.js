// FP 
// FUNCTIONS
const compose = require('./fp/functions/compose');
const curry = require('./fp/functions/curry');
const is = require('./fp/functions/is');
const isArray = require('./fp/functions/isArray');
const isNumber = require('./fp/functions/isNumber');
const isString = require('./fp/functions/isString');
const partial = require('./fp/functions/partial');
const swap = require('./fp/functions/swap');
const trace = require('./fp/functions/trace');

// Object
const prop = require('./fp/object/prop');

// Monad
const Maybe = require('./fp/Monad/Maybe');
const Either = require('./fp/Monad/Either');
const Left = require('./fp/Monad/Left');
const Right = require('./fp/Monad/Right');
const tryCatch = require('./fp/Monad/tryCatch');

// DOM
const addClass = require('./fp/dom/addClass');
const addEvent = require('./fp/dom/addEvent');
const append = require('./fp/dom/append');
const createElem = require('./fp/dom/createElem');
const elem = require('./fp/dom/elem');
const elems = require('./fp/dom/elems');
const getParentByClass = require('./fp/dom/getParentByClass');
const hasClass = require('./fp/dom/hasClass');
const innerHTML = require('./fp/dom/innerHTML');
const removeClass = require('./fp/dom/removeClass');

module.exports = {
  // Functions
  compose,
  curry,
  is,
  isArray,
  isNumber,
  isString,
  partial,
  swap,
  trace,

  // Object
  prop,

  // Monad
  Maybe,
  Either,
  Left,
  Right,
  tryCatch,

  // DOM
  addClass,
  addEvent,
  append,
  createElem,
  elem,
  elems,
  getParentByClass,
  hasClass,
  innerHTML,
  removeClass

};
