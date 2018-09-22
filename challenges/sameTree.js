// Build a function that takes two parameters (two binary trees data structures) and validate they are twins
// If they are twins then return true, else return false

function sameTree(tree1, tree2){
  if(tree1.data !== tree2.data){
    return false
  }
  if( tree1.childNodes.length !== tree2.childNodes.length){
    return false
  }
  if(tree1.childNodes !== tree2.childNodes.reverse()){
    console.log(tree1.childNodes)
    console.log(tree2.childNodes.reverse())
    return false
  }
  return true
}


module.exports = sameTree
