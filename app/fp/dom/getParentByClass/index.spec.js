const getParentByClass = require('./');

const testParent = document.createElement('DIV');
testParent.classList.add('test');
const elem = document.createElement('DIV');
testParent.appendChild(elem);

describe('Get parent by class', () => {

  it('Return parent with class .test', () => {
    expect(getParentByClass(elem, 'test')).toBe(testParent);
  });

  it('Should return null', () => {
    expect(getParentByClass(elem, '')).toBeNull();
  });

});