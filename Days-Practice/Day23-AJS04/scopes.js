// let keyword

/* let x = 1;

if (x === 1) {
  let x = 2;     // here this is new variable with block scope and cannot be used outside.

  console.log(x);    // That's why it gets printed as 2 for this statement
  // Expected output: 2
}

console.log(x);     // That's why it gets printed as 1 for this statement and not 2
// Expected output: 1
 */



// var keyword

/* var x = 1;

if (x === 1) {
  var x = 2;       // this x will be treated as same x from previous x declaration and it gets modified to 2 from 1

  console.log(x);   // so it prints 2
  // Expected output: 2
}

console.log(x);    ///so it also prints 2 here also
// Expected output: 2 */



// refer book for understanding of parsing and execution steps
/* var teacher = "Sanket";

function fun(){
    var teacher = "Pulkit";
    console.log(teacher);
}

function gun(){
    var student = "Sarthak"
    console.log(student);
}

fun();
gun();
console.log(teacher); */


// another case when an variable is not formally declared
// case 1
/* var teacher = "Sanket";

function fun(){
    var teacher = "Pulkit";
    content = "JS";         
    console.log(teacher);
}

function gun(){
    var student = "Sarthak"
    console.log(student);
}


fun();
gun();
console.log(teacher);
console.log(content);  */ // here it is accessed as global variable (why? -> defined below)

/* 
during the parsing step the scope will not be allocated to the content 
but during execution step when this value will be accessed then 
as there is not formal declaration it gets the scope of one block previous (here it is implicitly made global scope for the content -> auto global)
and then it can be accessed
but this content can be accessed only after allocation of the resources otherwise it will throw error
*/


// case 2
/* var teacher = "Sanket";

function fun(){
    var teacher = "Pulkit";
    content = "JS";         
    console.log(teacher);
}

function gun(){
    var student = "Sarthak"
    console.log(student);
}

console.log(content);
fun();
gun();
console.log(teacher); */


/* 
In the function fun(), you assign a value to content without using var, let, or const. 
In non-strict mode, this makes content an implicit global variable. 
However, since fun() is not executed before the first console.log(content);,
the global content variable does not exist at that point, leading to a ReferenceError.
*/