// Монада - простая реализация
class Monad {
  constructor(val) {
    this.__value = val;
  };
  static of (val) { // Monad.of проще, чем new Monad(val)
    return new Monad(val);
  };
  map(f) { // Применяет функцию, возвращает новый экземпляр Monad
    return Monad.of(f(this.__value));
  };
  join() { // используется для получения значения монады
    return this.__value;
  };
  chain(f) { // Хелпер, который применяет функцию и возвращает значение монады
    return this.map(f).join();
  };
  ap(someOtherMonad) { // Используется, чтобы взаимодействовать с другими монадами
    return someOtherMonad.map(this.__value);
  };
}

console.log(Monad.of(3).chain((value) => value * 2));