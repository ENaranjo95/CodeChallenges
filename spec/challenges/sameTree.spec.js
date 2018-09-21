const sameTree = require('../../challenges/sameTree')

test('Expects Tree1 and Tree2 to Equal True', () => {
  expect(sameTree(tree1, tree2))).toBe(true);
});

// test('Expects [3, 5, 9, 10, 12, 15, 18] to equal [1]', () => {
//   expect(notDivide([3, 5, 9, 10, 12, 15, 18])).toEqual([]);
// });
//
// test('Expects [3, 5, 9, 10, 12, 15, 18] to equal [1]', () => {
//   expect(notDivide([3, 5, 9, 10, 12, 15, 18])).toEqual([]);
// });
//
// test('Expects [3, 5, 9, 10, 12, 15, 18] to equal [1]', () => {
//   expect(notDivide([3, 5, 9, 10, 12, 15, 18])).toEqual([]);
// });

let tree1 = {
  "data": 10,
  "childeNodes": [
    {
      "data": 5,
      "childeNodes": []
    },
    {
      "data": 8,
      "childeNodes": [
        {
          "data": 7,
          "childeNodes": []
        }
      ]
    }
  ]
}

let tree2 = {
  "data": 10,
  "childeNodes": [
    {
      "data": 8,
      "childeNodes": [
        {
          "data": 7,
          "childeNodes": []
        }
      ]
    },
    {
      "data": 5,
      "childeNodes": []
    }
  ]
}
