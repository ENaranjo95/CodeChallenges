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

function highestPaid(data){
  if(data.directReport.length === 0) return data

  let highPaid = data.directReport.map( function(person){
    return {"id": person.id, "name": person.name, "salary": person.salary}
  });

  let topEarner = highPaid.find( function(person){
    let employee = null;
    if(employee === null) employee = person;
    if(employee.salary < person.salary) employee = person;
    return employee;
  });

  return topEarner;
}

module.exports = highestPaid
