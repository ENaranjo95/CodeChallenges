const fibonacci = require('../../challenges/fibonacci')


test('Expect index 2 to equal 1', () => {
  expect(fibonacci(2)).toEqual(1);
});

test('Expect index 6 to equal 8', () => {
  expect(fibonacci(6)).toEqual(8);
});

test('Expect index 4 to equal 3', () => {
  expect(fibonacci(4)).toEqual(3);
});

test('Expect index 10 to equal 55', () => {
  expect(fibonacci(10)).toEqual(55);
});
