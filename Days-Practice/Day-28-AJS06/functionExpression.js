// function declaration with "function" keyword
/* function fun(){
    // some code
} */


// function expressions
/* let f = function gun(){   // named function expression -> readability of code increases
    // some code
}

let a = function(){       // anonymous function expression -> readability of code decreases
    // some code
}

(function x(){          // IIFE
    // some code
})

(function (){          // IIFE
    // some code
})

let y = () => {          // arrow function
    // some code
} */


// IIFE
/* (function x(y){
    console.log("Hi", y);
})("Shubham"); */




// scope of function expressions allocated to a variable
/* const f = function fun(){
    console.log("Hiiii");
} */
// f();
// fun();    // func can be accessed only using f hence throws error here






// use cases
// Named functions
/* 🔹 Named functions are useful when:
✔️ You need to call the function multiple times.
✔️ You want better debugging (since errors will show the function name). console.trace -> provides stacks of functions calls which is better for debugging
✔️ You need recursion (a function calling itself). -> ex factorial of numbers stored in array

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
const numbers = [1, 2, 3, 4, 5];
const factorials = numbers.map(factorial);
console.log(factorials); // Output: [1, 2, 6, 24, 120]


*/


// anonymous function
/* 
🔹 Anonymous functions are useful when:
✔️ You need a one-time-use function.
✔️ You want to assign a function to a variable.
✔️ You are using callback functions.

setTimeout(function() {
    console.log("This message appears after 2 seconds!");
}, 2000);

*/
