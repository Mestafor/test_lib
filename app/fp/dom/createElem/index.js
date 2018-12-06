/**
 * 
 * @param {string} nodeName 
 * @return {HTMLElement}
 */
function createElem(nodeName) {
  if(typeof nodeName !== 'string') {
    return null;
  }
  return document.createElement(nodeName);
}

module.exports = createElem;
