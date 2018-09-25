const highestPaid = require('../../challenges/highestPaid')

test('Expect the binary rc to equal {"id": 124, "name": "Leon Noel", "salary": 90000}',
() => {
  expect(highestPaid(rc))
  .toEqual({"id": 124, "name": "Leon Noel", "salary": 90000, "directReport": []});
});

test('Expect the binary media to equal {"id": 124, "name": "Knight Fu", "salary": 120000}',
() => {
  expect(highestPaid(media))
  .toEqual({"id": 123, "name": "Mr. CEO", "salary": 130000, "directReport": []});
});

test('Expect the binary tree solo to equal {"id": 129, "name": "Edwin Naranjo", "salary": 80000, "directReport": []}',
() => {
  expect(highestPaid(solo))
  .toEqual({"id": 129, "name": "Edwin Naranjo", "salary": 80000, "directReport": []});
});

const solo = {"id": 129, "name": "Edwin Naranjo", "salary": 80000, "directReport": []}

const rc = {
  "id": 123,
  "name": "David Delmar",
  "salary": 80000,
  "directReport": [
    {
      "id": 124,
      "name": "Leon Noel",
      "salary": 90000,
      "directReport": [
        {
          "id": 125,
          "name": "Muigai Unaka",
          "salary": 70000,
          "directReport": []
        }
      ]
    },
    {
      "id": 126,
      "name": "Rougi Diallo",
      "salary": 70000,
      "directReport": []
    },
    {
      "id": 127,
      "name": "Stephanie Castaños",
      "salary": 70000,
      "directReport": []
    }
  ]
}

const media = {
  "id": 123,
  "name": "Mr. CEO",
  "salary": 130000,
  "directReport": [
    {
      "id": 124,
      "name": "Knight Fu",
      "salary": 120000,
      "directReport": [
        {
          "id": 129,
          "name": "Edwin Naranjo",
          "salary": 80000,
          "directReport": []
        },
        {
          "id": 130,
          "name": "Rakim Craig",
          "salary": 80000,
          "directReport": []
        }
      ]
    },
    {
      "id": 125,
      "name": "Ronda",
      "salary": 120000,
      "directReport": []
    },
    {
      "id": 126,
      "name": "Jason",
      "salary": 90000,
      "directReport": []
    }
  ]
}

// {
//   'id': null,
//   'name': null,
//   'salary': null,
//   'directReport': [
//     {
//       'id': null,
//       'name': null,
//       'salary': null,
//       'directReport':[
//         {
//           'id': null,
//           'name': null,
//           'salary': null,
//           'directReport':[
//             {
//               'id': null,
//               'name': null,
//               'salary': null,
//               'directReport':[]
//             },
//             {
//               'id': null,
//               'name': null,
//               'salary': null,
//               'directReport':[]
//             },
//             {
//               'id': null,
//               'name': null,
//               'salary': null,
//               'directReport':[]
//             }
//           ]
//         }
//       ]
//     },
//     {
//       'id': null,
//       'name': null,
//       'salary': null,
//       'directReport':[
//         {
//           'id': null,
//           'name': null,
//           'salary': null,
//           'directReport':[]
//         },
//         {
//           'id': null,
//           'name': null,
//           'salary': null,
//           'directReport':[]
//         },
//         {
//           'id': null,
//           'name': null,
//           'salary': null,
//           'directReport':[
//             {
//               'id': null,
//               'name': null,
//               'salary': null,
//               'directReport':[]
//             },
//             {
//               'id': null,
//               'name': null,
//               'salary': null,
//               'directReport':[]
//             }
//           ]
//         }
//       ]
//     }
//   ]
// }
