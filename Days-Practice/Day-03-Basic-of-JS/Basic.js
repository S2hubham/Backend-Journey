/* var score = 10;
var marks = 90;

let age = 19;
let flag = 0;

const pi = 3.1414
*/

/* 
wrong declaration of variable

let let = 3;
let 3ans = 90;

*/





/* console.log(10);
console.log("Hello World");
console.log(age, score, marks); */
 


/* 
// Undefined Type
let notAssigned;
console.log(notAssigned); 

// Null Type
let emptyValue = null;
console.log(emptyValue); 

// Boolean Type
let isAvailable = true;
let hasDiscount = false;
console.log(isAvailable, hasDiscount); 

// String Type
let greeting = "Hello, World!";
let name = `John`;
console.log(`${greeting} My name is ${name}.`);

// Symbol Type
let uniqueId = Symbol("id");
let anotherId = Symbol("id");
console.log(uniqueId === anotherId);

// Number Type
let age = 25;
let price = 19.99;
let invalid = "abc" / 2; 
console.log(age, price, invalid); 

// Object Type
let user = {
  name: "Alice",
  age: 30,
  isAdmin: true,
};
console.log(user); 
 */





/* let text = "The new apple iphone \n has been launched";
console.log(text);
let text2 = "The new apple iphone \t has been launched";
console.log(text2); */





/* // Arithmetic Operators
let x = 10, y = 3;

console.log(x + y);  // Addition: 13
console.log(x - y);  // Subtraction: 7
console.log(x * y);  // Multiplication: 30
console.log(x / y);  // Division: 3.333...
console.log(x % y);  // Modulus: 1
console.log(x ** y); // Exponentiation: 1000

x++;                // Increment
console.log(x);     // 11

y--;                // Decrement
console.log(y);     // 2

// Assignment Operators
let a = 5;

a += 3;             // Add and assign
console.log(a);     // 8

a -= 2;             // Subtract and assign
console.log(a);     // 6

a *= 2;             // Multiply and assign
console.log(a);     // 12

a /= 4;             // Divide and assign
console.log(a);     // 3

a %= 2;             // Modulus and assign
console.log(a);     // 1

a **= 3;            // Exponentiation and assign
console.log(a);     // 1
 */





/* // Loose Equality and Inequality
console.log(5 == "5");  // true (type coercion happens)
console.log(5 != "5");  // false (type coercion happens)

// Strict Equality and Inequality
console.log(5 === "5"); // false (no type coercion)
console.log(5 !== "5"); // true (no type coercion)

// Greater Than and Less Than
console.log(10 > 5);    // true
console.log(10 < 5);    // false

// Greater Than or Equal To
console.log(10 >= 10);  // true

// Less Than or Equal To
console.log(5 <= 10);   // true

// Mixed Examples
let a = 20, b = "20";
console.log(a == b);    // true (loose equality)
console.log(a === b);   // false (strict equality)
console.log(a > 15);    // true
console.log(a <= 25);   // true
 */





/* let a = 10, b = 5, c = 0;

// Logical AND (&&)
console.log(a > 5 && b < 10); // true (both conditions are true)
console.log(a > 5 && c > 1);  // false (second condition is false)

// Logical OR (||)
console.log(a > 5 || c > 1);  // true (first condition is true)
console.log(c > 1 || b < 10); // true (second condition is true)
console.log(c > 1 || c === 0); // true (second condition is true)

// Logical NOT (!)
console.log(!(a > 5));        // false (a > 5 is true, so !true is false)
console.log(!(c > 1));        // true (c > 1 is false, so !false is true)

// Combined Example
let isAdult = true;
let hasID = false;

if (isAdult && hasID) {
  console.log("Access Granted");
} else if (isAdult || hasID) {
  console.log("Partial Access");
} else {
  console.log("Access Denied");
}

// Output: Partial Access (because `isAdult` is true) */





/* console.log(10 && 6);
console.log(0 && 6);
console.log(10 || 6);
console.log(0 || 6); */





/* console.log(undefined === undefined);
console.log(NaN === NaN);
console.log(Infinity == Infinity);
console.log(-Infinity == -Infinity); */





/* let a = 5;  // Binary: 0101
let b = 3;  // Binary: 0011

// Bitwise AND
console.log(a & b);  // 1 (Binary: 0001)

// Bitwise OR
console.log(a | b);  // 7 (Binary: 0111)

// Bitwise XOR
console.log(a ^ b);  // 6 (Binary: 0110)

// Bitwise NOT
console.log(~a);     // -6 (Inverts 0101 to 1010)

// Left Shift
console.log(a << 1); // 10 (Binary: 1010)

// Right Shift
console.log(a >> 1); // 2 (Binary: 0010)

// Zero-fill Right Shift
console.log(a >>> 1); // 2 (Binary: 0010)

let c = -5; // Binary: 11111111111111111111111111111011 (32-bit representation)

// Negative Number Right Shift
console.log(c >> 1);  // -3

// Negative Number Zero-fill Right Shift
console.log(c >>> 1); // 2147483645 */






/* console.log(typeof("1"));
console.log(typeof(1));
console.log(typeof("abs"/2));
console.log(typeof(undefined));
console.log(typeof(Infinity));
console.log(typeof(null));    //edge case  */