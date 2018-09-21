// "Write a function that sorts a list of integers by how far they are to 12,
// and if they are the same distance, by their values. For example,
// if we have a list of integers 0, 3, 5, 13, 19, then the result after sorting the list is 13, 5, 19, 3, 0."

let fromTwelve = (arr) => {
  for(let x = arr.length - 1; x > 0; x--){
    for(let y = 1; y <= x; y++ ){
      if(Math.abs(arr[y - 1] - 12) > Math.abs(arr[y] - 12)){
        let temp = arr[y - 1]
        arr[y - 1] = arr[y]
        arr[y] = temp
      }

    }
  }
   return arr
}

module.exports = fromTwelve
