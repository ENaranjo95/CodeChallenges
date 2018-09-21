const getDuplicate = require('../../challenges/getDuplicate')

test('[foo, bar, foo, bar] to equal [foo, bar]', () => {
  expect(getDuplicate(['foo', 'bar', 'foo', 'bar'])).toEqual(['foo', 'bar']);
});

test('[foo, bar, foo] to equal [foo]', () => {
  expect(getDuplicate(['foo', 'bar', 'foo'])).toEqual(['foo']);
});

test('[1, 2, 2, 4, 5] to equal [2]', () => {
  expect(getDuplicate([1, 2, 2, 4, 5])).toEqual([2]);
});

test('[1, 2, 1, 5, 8, 9, 2] to equal [13, 5, 19, 3, 0]', () => {
  expect(getDuplicate([1, 2, 1, 5, 8, 9, 2])).toEqual([1, 2]);
});
