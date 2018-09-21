// Build the function that takes a integer (represented as the index number of the fibonacci list) and return the value it would be
// Ex. index = 2 should return the number 1
// Ex. index = 6 should return the number 8
// Fibonacci Sequence [0, 1, 1, 2, 3, 5, 8, 13, ...]

function fibonaaci(index){
  if(index === 0) return 0
  if(index === 1) return 1
  return fibonaaci(index - 2) + fibonaaci(index - 1)
}

module.exports = fibonaaci
