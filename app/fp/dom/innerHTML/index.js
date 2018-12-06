'use strict';
/**
 * Insert HTML in elem
 * @param {HTMLElement} elem 
 * @param {string} content 
 * @return {HTMLElement | null}
 */
function innerHTML(elem, content) {
  if (elem == undefined || typeof content !== 'string') {
    return null;
  }
  elem.innerHTML = content;
  return elem;
}

module.exports = innerHTML;
