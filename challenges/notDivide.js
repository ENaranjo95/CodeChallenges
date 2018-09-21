// "Write an application that find all the integers in a list that
// do not divide evenly into 3, 5 or 10."


let notDivide = (arr) => {
  let newArr = []
  for(let x = 0; x < arr.length; x++){
    if( arr[x] % 3 !== 0 && arr[x] % 5 !== 0 && arr[x] % 10 !==0 ){
      newArr.push(arr[x])
    }
  }
  return newArr
}

module.exports = notDivide
