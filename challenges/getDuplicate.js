// Give a list, can you return the word or words duplicated in the array.
// EX. let arr = ['foo', 'bar', 'foo'] returns 'foo'.
// Ex. let arr = [1, 2, 2, 4] returns 2

function getDuplicate(arr){
  let freq = {}
  let duplicate = []
  if(arr.length === 0 ){
    return arr
  }else{
    for(let x = 0; x < arr.length; x++){
      if(Object.keys(freq).includes(`${arr[x]}`)){
        freq[arr[x]] += 1
      }else{
        freq[arr[x]] = 1
      }
    }
  }
  for(let el in freq){
    if(freq[el] > 1 && !isNaN(parseInt(el)) ){
      duplicate.push(parseInt(el))
    }else if(freq[el] > 1){
      duplicate.push(el)
    }
  }
  return duplicate
}

module.exports = getDuplicate
