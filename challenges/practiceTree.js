function highest(data, level, max){

  if(max === undefined){
    max = data
  }else{
    if(max.salary < data.salary){
      max = data
    }
  }
  console.log(`${'*'.repeat(level)} ${data.name} ${data.salary} ${max.salary}`)

  if(data.directReport.length === 0){
    return max
  }
  for(let x = 0; x < data.directReport.length; x++){
    max = highest(data.directReport[x], level + 1, max)
  }
  console.log(`Returning ${max.salary}`)
  return max
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
          "salary": 800000,
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
let person = highest(media, 0)

console.log(person)
