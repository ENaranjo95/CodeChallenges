const fromTwelve = require('../../challenges/fromTwelve')

test('[0, 3, 5, 13, 19] to equal [13, 5, 19, 3, 0]', () => {
  expect(distance([0, 3, 5, 13, 19])).toEqual([13, 5, 19, 3, 0]);
});

test('[1, 6, 9, 18, 20] to equal [20, 18, 6, 9, 1]', () => {
  expect(distance([1, 6, 9, 18, 20])).toEqual([9, 6, 18, 20, 1]);
});
