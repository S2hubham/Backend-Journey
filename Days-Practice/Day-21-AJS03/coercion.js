/* let obj = {};
// this also does coercion
console.log("This is me " + obj);
console.log(`This is me ${obj}`); */


/* console.log(Number(123));
console.log(Number("abcd"));        
console.log(Number("0xa")); */



// NaN

/* let x = NaN;

console.log(x == NaN);

console.log(isNaN(x));  // if its NaN it will return false but it will return false for other values like 2, 12 also

console.log(isNaN("shubham"));   // converts 'shubham' to number and then checks is number or not

console.log(Number.isNaN("shubham"));   // doesn't do number conversion of value and just checks for NaN or not 

console.log(Number.isNaN(x));

if(typeof(x) == 'number' && x !== x){
    console.log("Is NaN");
}    
else{
    console.log("Is not NaN");
}


console.log(x !== NaN);

console.log(x !== x); */

/* x !== x works well for simple cases.
Number.isNaN(x) is better for explicit checks.
Object.is(NaN, NaN) avoids edge cases like -0 and +0. */




// Negative zero
/* let x = +0;
closole.log(x === -0);   //true
console.log(x === +0);   //true
console.log(Object.is(x, -0));   //true
console.log(Object.is(x, 0));    //false

console.log(Math.sign(-3));
console.log(Math.sign(2));
console.log(Math.sign(0));
console.log(Math.sign(-0));

function isNegativeZero(x) {
    return x === 0 && 1 / x === -Infinity;
} */


/*
Handles edge cases: object.is(x, -0) correctly differentiates -0 from 0, whereas x or x -0 cannot
so best way to find out -0 or not is by Object.is(x, -0)
alternative approach is above function */


// custom function that can give us sign of any function properly
/* function giveSign(x){
    if(x < 0 || Object.is(x, -0)){
        console.log(-1);
    }
    else{
        console.log(1);
    }
}

giveSign(x); */




/* // Boxing    (type doesn't change to object just temp converts to object)
// console.log(1.toString());    //gives error
console.log(typeof (1).toString());    //manual boxing
console.log(Number(1).toString());     //Number is wrapper that wraps 1 in object and  then calls toString()
console.log("abc");

let x = 1;    
console.log(x.toString());   //autoboxing */

