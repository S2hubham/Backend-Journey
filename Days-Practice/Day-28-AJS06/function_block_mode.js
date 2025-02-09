// without strict mode -> this code runs fine
/* {
    function fun(){
        return "123";
    }
}
console.log(fun); */


// using strict mode -> this code gives error
/* "use strict";
{
    function fun(){
        return "123";
    }
    console.log(fun);
}
console.log(fun); */


/* 
Code 1 : 
Even though fun is declared inside the {} block, it gets hoisted to the global scope (or the function scope if inside another function).
This means fun is available outside the block.
So console.log(fun); works fine because fun exists in the surrounding scope.
Non-Strict Mode: Functions inside {} are hoisted to the enclosing scope (global or function scope).


Code 2 :
In strict mode, function declarations inside a block {} do not get hoisted to the enclosing scope.
This means fun only exists inside the {} block and is not available outside.
So console.log(fun); throws a ReferenceError because fun is not defined in the outer scope.
Strict Mode: Functions inside {} are block-scoped and cannot be accessed outside.

*/