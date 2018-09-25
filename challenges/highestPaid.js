// Build a function that takes a Binary Tree data structure and returns the highest earned salary employee among the company
// The data is structured as follow:
// {
//   "id": Integer Data type,
//   "name": String Data type,
//   "salary": Integer Data Type,
//   "directReport": [
//     {
//       "id": Integer Data Type,
//       "name": String Data Type,
//       "salary": Integer Data Type,
//       "directReport": []
//     },
//     {
//       "id": Integer Data Type,
//       "name": String Data Type,
//       "salary": Integer Data Type,
//       "directReport": [
//         {
//           "id": Integer Data Type,
//           "name": String Data Type,
//           "salary": Integer Data Type,
//           "directReport": []
//         },
//         {
//           "id": Integer Data Type,
//           "name": String Data Type,
//           "salary": Integer Data Type,
//           "directReport": []
//         }
//       ]
//     }
//   ]
// }

let highestPaid = (data, level, max) => {

  if(max === undefined){
    max = data
  }else{
    if(max.salary < data.salary){
      max = data
    }
  }
  //console.log(`${'*'.repeat(level)} ${data.name} ${data.salary} ${max.salary}`)

  if(data.directReport.length === 0){
    return max
  }
  for(let x = 0; x < data.directReport.length; x++){
    max = highestPaid(data.directReport[x], level + 1, max)
  }

  return max
}

module.exports = highestPaid
