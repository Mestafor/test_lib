'use strict';
/**
 * 
 * @param {HTMLElement | Element} el 
 * @param {string | string[]} classes 
 * @return {HTMLElement}
 */
function removeClass(el, classes) {
  if (el == undefined || typeof classes !== 'string') {
    return el;
  }

  const classList = el.classList;
  if (typeof classes === 'string') {
    classList.remove(classes);
  } else if (classes instanceof Array) {
    classes.forEach(className => classList.remove(className));
  }

  return el;
}

module.exports = removeClass;