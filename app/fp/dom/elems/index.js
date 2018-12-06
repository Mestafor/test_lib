'use strict';

/**
 * 
 * @param {Document | HTMLElement | Element} context 
 * @param {string} selector 
 * @return {NodeListOf<Element>}
 */
function elems(context, selector) {
  if (context == undefined || typeof selector !== 'string') {
    return null;
  }
  return context.querySelectorAll(selector)
}

module.exports = elems;