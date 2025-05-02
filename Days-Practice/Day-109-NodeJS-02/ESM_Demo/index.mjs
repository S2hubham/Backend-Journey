// import searchFunction from './searching.js';   // js needs to be added at the end if we want to module.exports
import Binarysearch, {Linearsearch} from './searching.mjs';  // this is deault, named export 
import quickSort from './quickSort'; 
// console.log(searchFunctionlinear([1, 2, 3, 5, 6], 6));
console.log(Linearsearch([1, 2, 3, 5, 6], 6));
console.log(Binarysearch([1, 2, 3, 5, 6], 6)); 