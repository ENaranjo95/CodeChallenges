const notDivide = require('../../challenges/notDivide')

test('Expects [1, 5, 3, 10] to equal [1]', () => {
  expect(notDivide([1, 5, 3, 10])).toEqual([1]);
});

test('Expects [2, 6, 9, 20, 25] to equal [2]', () => {
  expect(notDivide([2, 6, 9, 20, 25])).toEqual([2]);
});

test('Expects [1, 4, 7, 11, 20] to equal [1, 4, 7, 11]', () => {
  expect(notDivide([1, 4, 7, 11, 20])).toEqual([1, 4, 7, 11]);
});

test('Expects [3, 5, 9, 10, 12, 15, 18] to equal [1]', () => {
  expect(notDivide([3, 5, 9, 10, 12, 15, 18])).toEqual([]);
});
