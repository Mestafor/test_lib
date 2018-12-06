const compose = require('./');

describe('Compose', () => {

    test('compose not null or undefined', () => {
        expect(compose).toBeDefined();
    })

    test('compose 3 functions and return 5', () => {
      const add = x => x + 1;
      const multiply = x => x * x;
      const res = compose(
        add,
        multiply,
        () => 2
      )();

      expect(res).toBe(5);
    })

});

