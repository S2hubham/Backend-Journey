/* let x = 10;
console.log(!x);
let y = undefined;
console.log(!y);

if(y){
    console.log("It is truthy");
}
else{
    console.log("It is falsy");
} */



/* console.log(12 == '12');

console.log(null == undefined);  //true

console.log(false == '0');
    // x -> boolean -> ToNumber() -> false -> 0
    // x == y -> 0 == '0'
    // y -> string -> ToNumber() -> 0
    // x == y -> 0 == 0 -> true


console.log(null == false);
    // y -> boolean -> ToNumber() -> 0
    // x == y -> null == 0 -> no rules are followed hence return false

let obj = {};
console.log(10 == obj);
    // x -> number , y -> object 
    // y -> ToPrimitive() -> [object object]
    // x == y -> (number == string) 
    // y -> ToNumber() -> NaN
    // x == y -> 10 == NaN -> false 
 */


/* console.log(NaN === NaN);
    // as x/y is NaN hence returns false  

console.log(NaN == NaN);

console.log(-0 == +0);   */






// practice examples
// console.log(null == undefined);    //true
// console.log(null === undefined);   //false  as typeof null is object and typeof undefined is undefined

// console.log(false == '0');    //true
// console.log(false === '0');   //false

// console.log(true == 1);       //true
// console.log(true === 1);      //false

// console.log({} == '[object Object]');    //true 
// console.log({} === '[object Object]');   //false

// symbols are always unique hence it return false for == and ===

// console.log(Symbol('a') == Symbol('a'));    //false
// console.log(Symbol('a') === Symbol('a'));   //false

// diff mem loc object hence false else true
// const a = {};
// const b = {};
// const c = a;
// console.log(a == b);  //false
// console.log(a === b); //false
// console.log(a == c);  //true
// console.log(a === c); //true
// console.log({} === {}); //false as both objects are created at diff mem loc






// concer cases
// ToString
/* console.log("" + 0);
console.log("" + -0);

console.log("" + []);  // [] -> ""
console.log("" + {});  // tostring() is given with hint hence returns [object object]

console.log("" + [0, 1, 2, 4]);
console.log("" + [null, undefined]); // [], null, undefined -> "" and only remains is ,
console.log("" + [1, 2, null, 4]);

console.log(0); */


// ToNumber
/* console.log(0 - "010");
console.log(0 - "O10");
console.log(0 - 010);    // converts to octal number 8
console.log(0 - "0xb");  // converts to hexadecimal
console.log(0 - 0xb);    // converts to hexadecimal
console.log([] - 1);
console.log([""] - 1);
console.log(["0"] - 1); */