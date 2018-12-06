'use strict';
/**
 * 
 * @param {HTMLElement | Element} el 
 * @param {string} className 
 * @return {boolean | null}
 */
function hasClass (el, className) {
  if(el == undefined || typeof className !== 'string') {
    return null;
  }
 return el.classList.contains(className);
} 

module.exports = hasClass;
