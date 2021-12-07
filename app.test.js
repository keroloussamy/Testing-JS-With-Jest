const app = require('./app');
describe('calculator', () => {
  test('stringLength default', () => {
    expect(app.stringLength('abc')).toBe(3);
  });

  test('stringLength empty string', () => {
    expect(() => app.stringLength('')).toThrow();
    //Note: the function that throws an exception needs to be invoked within a wrapping function otherwise the toThrow assertion will fail.
  });
});

//--------------------------------------------
test('reverseString', () => {
  expect(app.reverseString('abc')).toBe('cba');
});
//--------------------------------------------
// describe : https://jestjs.io/docs/api#describename-fn
describe('calculator', () => {
  test('add', () => {
    expect(app.calculator.add(2,1)).toBe(3);
  });

  test('subtract', () => {
    expect(app.calculator.subtract(2,1)).toBe(1);
  });
  
  test('divide', () => {
    expect(app.calculator.divide(2,1)).toBe(2);
  });
  
  test('multiply', () => {
    expect(app.calculator.multiply(2,1)).toBe(2);
  });
});
//--------------------------------------------
test('capitalize', () => {
  expect(app.capitalize('abc')).toBe('Abc');
});
//--------------------------------------------
test('Abc class', () => {
  expect(new app.Abc().name('aa')).toBe('aa');
});


