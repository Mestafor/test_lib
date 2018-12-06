'use strict';
/**
 * 
 * @param {HTMLElement} elem 
 * @param {string} className 
 * @return {HTMLElement | null}
 */
function getParrentClass(elem, className) {
  let parent = elem.parentNode;

  if (!parent) {
    return null;
  }

  while (!parent.classList.contains(className)) {
    parent = parent.parentNode;

    if (!parent || parent === document.body) {
      return null;
    }
  }

  return parent;

}

module.exports = getParrentClass;