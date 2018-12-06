'use strict';
/**
 * Find html element
 * @param {HTMLElement | Document} context 
 * @param {string} selector 
 * @return {HTMLElement | null}
 */
function getElem(context, selector) {
  if (context == undefined || typeof selector !== 'string') {
    return null;
  }
  return context.querySelector(selector);
}

module.exports = getElem;