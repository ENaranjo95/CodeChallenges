const sameTree = require('../../challenges/sameTree')

test('Expects Tree1 and Tree2 to Equal True', () => {
  expect(sameTree(tree1, tree2)).toEqual(true);
});

// test('Expects tree3 and tree4 to equal false', () => {
//   expect(sameTree(tree3, tree4)).toEqual(false);
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
  "childNodes": [
    {
      "data": 5,
      "childNodes": []
    },
    {
      "data": 8,
      "childNodes": [
        {
          "data": 7,
          "childNodes": []
        }
      ]
    }
  ]
}

let tree2 = {
  "data": 10,
  "childNodes": [
    {
      "data": 8,
      "childNodes": [
        {
          "data": 7,
          "childNodes": []
        }
      ]
    },
    {
      "data": 5,
      "childNodes": []
    }
  ]
}
