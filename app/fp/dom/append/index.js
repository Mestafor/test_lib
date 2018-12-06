/**
 * Insert element to wrapper and return wrapper
 * @param {HTMLElement} wrapper 
 * @param {HTMLElement} insertedElem 
 * @return {HTMLElement}
 */
function append(wrapper, insertedElem) {
  if(wrapper == undefined || insertedElem == undefined) {
    return null;
  }
  wrapper.appendChild(insertedElem);
  return wrapper;
}

module.exports = append;
