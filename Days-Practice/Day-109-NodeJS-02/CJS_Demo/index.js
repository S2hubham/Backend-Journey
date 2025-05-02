/* const searchFunction = require("./searching");
console.log(searchFunction);  // { linear: [Function: search], binary: [Function: search] }
console.log(searching.linear([1, 2, 3, 5, 6], 6)); */

// or destructuring will be more helpful 

/* const {linear : ls, binary} = require("./searching");
console.log(ls([1, 2, 3, 5, 6], 6));  */




const {bubbleSort : bs, insertionSort} = require("./sorting")    // named export
const quickSort = require("./quickSort");    // default export

let arr = [5, 4, 3, 2, 1];
arr = quickSort(arr);
arr = bs(arr);
console.log(arr);

console.log(module);