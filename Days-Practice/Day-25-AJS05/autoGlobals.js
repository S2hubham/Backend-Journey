/* "use strict";

x = 10;  //  throws error 'x' is not defined
console.log(x); */


/* function myFunction() {
    "use strict";
    console.log("shubham");
    y = 20;  // throws error 'y' is not defined
    console.log(y);
}
myFunction(); */


// doesn't allow deletion
/* "use strict";
let person = "Alice";
delete person; */


// doesn't allow duplicate variable names
/* "use strict";
function add(a, a) {  //  Duplicate parameter name not allowed
    return a + a;
} */



// doesn't allow use of reserved words
/* "use strict";
let package = "shubham";
console.log(package); */



// Strict mode prevents modifying properties that are marked as non-writable.
/* "use strict";
const obj = {};
Object.defineProperty(obj, "name", { value: "John", writable: false });

obj.name = "Doe";  // throws error Cannot modify read-only property */






// refer .txt for the explanation of below code
/* console.log('Shubham');
console.lo("kokane");

console.log('Shubham');
console..log("kokane"); */






// lexical scoping example
/* function fun(){           // fun -> global scope
    var x = 10;           // x -> fun scope
    function gun(){       // gun -> fun scope
        var y = 20;       // y -> gun scope
        console.log(x);   // 10
        console.log(y);   // 20
    }
    gun();
    console.log(x);   // 10
    console.log(y);   // error (this happens during runtime)
}
fun();   */