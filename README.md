# Media Math Code Challenges

## Technology
** Tech Used: ** Jest and Node.JS

  ### Instructions

  1. Fork or Clone this repo
  2. `npm install` to download dependencies
  3. Create and checkout into a new branch
  4. `cd` into the challenges folder to start working


  #### Testing

  - To test solution on a specific file:
    - Run `npm test spec/challenges/<nameOfFile>.spec.js`
  - To test every file:
    - Run `npm test`

  ### Challenges

- [Fibonacci] (challenges/fibonacci.js)
  - Build the function that takes a integer (represented as the index number of the fibonacci list) and return the fibonnaci number. (Ex. index number 2, returns fib number 1; index number 5, returns fib number 3)

- [From Twelve] (challenges/fromTwelve.js)
  - Write a function that sorts a list of integers by how far they are to 12,
  and if they are the same distance, by their values. For example,
  if we have a list of integers 0, 3, 5, 13, 19, then the result after sorting the list is 13, 5, 19, 3, 0.

- [Get Duplicate] (challenges/getDuplicate.js)
    - Given a list, return the word or words duplicated in a list. (Ex. ['foo', 'bar', 'hello', 'foo', 'hello'], returns ['foo', 'hello'])

- [Highest Paid] (challenges/highestPaid.js)
  - Build a function that takes a Binary Tree data structure and returns the highest earned salary employee among the company
  Tree structure as followed: {'id': int, 'name': 'string', 'salary': int, 'directReport': [] }

- [Not Divide] (challenges/notDivide.js)
  - Write a function that finds all the integers in a list that do not divide evenly into 3, 5 or 10 and return a list.

- [Same Tree] (challenges/sameTree.js)
  - Build a function that takes two parameters (two binary trees data structures) and validate they are identical. If they are identical then return true, else return false.
  Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
  ```
  
      *            *
    /   \        /   \
   *     *      *     *
  / \     \    / \     \
 *   *     *  *   *     *
 
 ```
 
 
 
  
  
  
