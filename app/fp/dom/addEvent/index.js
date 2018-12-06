/**
 * addEventListener
 * @param {EventListenerOrEventListenerObject} fn 
 * @param {string} event 
 * @param {HTMLElement} elem 
 * @return {HTMLElement | null}
 */
function addEvent(fn, event, elem) {
  if (
    typeof fn !== 'function' ||
    typeof event !== 'string' ||
    elem == undefined
  ) {
    return null;
  }
  elem.addEventListener(event, fn)
  return elem;
}

module.exports = addEvent;