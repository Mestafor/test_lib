const trace = require('./');

describe('trace', () => {

    test('trace not null or undefined', () => {
        expect(trace).toBeDefined();
    })

    test('return function', () => {
        expect(trace).toBeInstanceOf(Function);
    })

    test('should return 2', () => {
      expect(trace('test 2')(2)).toBe(2);
    })

})

