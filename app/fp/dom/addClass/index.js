/**
 * Add class to html element 
 * @param {HTMLElement} el 
 * @param {string | string[]} classes 
 * @return {HTMLElement}
 */
function addClass(el, classes) {
  if (el == undefined) {
    return null;
  }
  const classList = el.classList;
  if (typeof classes === 'string') {
    classList.add(classes);
  } else if (classes instanceof Array) {
    classes.forEach(className => classList.add(className));
  }

  return el;
}

module.exports = addClass;
