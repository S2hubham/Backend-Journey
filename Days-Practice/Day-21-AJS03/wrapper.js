// In JavaScript and many other languages, primitive values (like numbers, strings, and booleans) do not have methods or properties. 
// However, JavaScript automatically wraps them in wrapper objects when you try to use methods on them.

// How Does This Work?
// - When you call a method on a primitive value, JavaScript temporarily wraps it in an object of the corresponding wrapper class (`Number`, `String`, `Boolean`).
// - This allows you to access methods on primitives.
// - Once the method is executed, the wrapper object is discarded.


// Example 1: String Primitive vs. String Object

// Primitive String
let str = "hello";

// JavaScript temporarily wraps `str` in a String object
console.log(str.toUpperCase());  // Output: "HELLO"

// Explicitly creating a String object (not recommended)
let strObj = new String("hello");
console.log(strObj.toUpperCase());  // Output: "HELLO"

// Checking types
console.log(typeof str);    // "string" (primitive)
console.log(typeof strObj); // "object" (wrapper object)

// - When `str.toUpperCase()` is called, JavaScript creates a temporary `String` object, runs `.toUpperCase()`, and then removes the wrapper.
// - The `strObj` variable, however, is an explicit wrapper object, which is different from a primitive string.







// Example 2: Number Primitive vs. Number Object

// Primitive Number
let num = 42;

// JavaScript automatically wraps it in a Number object
console.log(num.toFixed(2));  // Output: "42.00"

// Explicitly creating a Number object (not recommended)
let numObj = new Number(42);
console.log(numObj.toFixed(2));  // Output: "42.00"

// Checking types
console.log(typeof num);    // "number" (primitive)
console.log(typeof numObj); // "object" (wrapper object)

// The method `.toFixed(2)` works on the primitive `num` because JavaScript temporarily wraps it in a `Number` object.
// numObj`, on the other hand, is a persistent `Number` object.






// Example 3: Boolean Primitive vs. Boolean Object

// Primitive Boolean
let bool = true;

// JavaScript automatically wraps it
console.log(bool.toString());  // Output: "true"

// Explicitly creating a Boolean object (not recommended)
let boolObj = new Boolean(false);
console.log(boolObj.toString());  // Output: "false"

// Checking types
console.log(typeof bool);    // "boolean" (primitive)
console.log(typeof boolObj); // "object" (wrapper object)

// .toString()` works on `bool` because JavaScript temporarily wraps it in a `Boolean` object.
// boolObj` is an explicit `Boolean` object, which is rarely useful.


/* Key Takeaways
1. Primitive values (`string`, `number`, `boolean`) do not have methods, but JavaScript automatically wraps them in corresponding wrapper objects when needed.
2. Wrapper classes are:
   String` for string primitives.
   Number` for number primitives.
   Boolean` for boolean primitives.
3. Explicitly creating wrapper objects (e.g., `new String("hello")`) is unnecessary and can lead to unexpected behavior.
4. Wrapper objects are objects, not primitives, and can behave differently when compared using `===`.

This automatic boxing (wrapping) is a feature of JavaScript's autoboxing mechanism, making it easier to work with primitives as if they had methods. */