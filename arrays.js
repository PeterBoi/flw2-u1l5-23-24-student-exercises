// 1. Define two arrays:
//  - evens filled with even numbers
//  - odds filled odd numbers
let evens = [2,4,6,8,10];
let odds = [1,3,5,7,9];

// 2. In the function body, using the spread operator:
//  - return a new array numbers that contains the elements of arr1 and arr2
function combineArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort();

  }

  
  // 3. Uncomment the code below to test the function.
console.log(combineArrays(evens, odds));