// --[Conditionals]--

/* let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
}

if (age < 18) {
  console.log("You are a minor.");
} else {
  console.log("You are an adult.");
} */






/* let grade = 85;

if (grade >= 90) {
  console.log("You got an A!");
} else if (grade >= 75) {
  console.log("You got a B.");
} else if (grade >= 50) {
  console.log("You got a C.");
} else {
  console.log("You failed.");
}


// Nested if
let isMember = true;
let purchaseAmount = 120;

if (isMember) {
  if (purchaseAmount > 100) {
    console.log("You get a 20% discount!");
  } else {
    console.log("You get a 10% discount.");
  }
} else {
  console.log("You get no discount.");
} */






// even odd
/* let num = 54;
if(num%2 == 0){
    console.log("Even");
}
else{
    console.log("Odd");
} */






// minimum of three
/*
let a = 10, b = 30, c = 5;
if(a < b){
    if(a < c){
        console.log(`${a} is smaller`);
    }
    else{
        console.log(`${c} is smaller`);
    }
}
else{
    if(b < c){
        console.log(`${b} is smaller`);
    }
    else{
        console.log(`${c} is smaller`);
    }
}
 

// or

if(a < b && a < c){
    console.log(`${a} is smaller`);
}
else if(b < a && b < c){
    console.log(`${b} is smaller`);
}
else{
    console.log(`${c} is smaller`);
}
*/






// triangle
/* let a = 5, b = 10, c = 12;
if(a+b > c && b+c > a && a+c > b){
    console.log("YES");
}
else{
    console.log("NO");
} */






// types of triangle
/* let a = 5, b = 10, c = 10;
if(a == b && b == c && a == c){
    console.log("Equilateral");
}
else if(a == b || b == c || a == c){
    console.log("Isosceles");
}
else{
    console.log("Scalene");
} */






// --[Loops]--

/* // for loop: Counting from 0 to 4
for (let i = 0; i < 5; i++) {
  console.log(`for loop: ${i}`);
}

// while loop: Counting from 5 to 0
let i = 5;
while (i >= 0) {
  console.log(`while loop: ${i}`);
  i--;
}

// do...while loop: Always executes at least once
let j = 0;
do {
  console.log(`do...while loop: ${j}`);
  j++;
} while (j < 3);

// for...in loop: Iterating over object properties
const person = { name: "John", age: 30 };
for (let key in person) {
  console.log(`for...in loop: ${key} = ${person[key]}`);
}

// for...of loop: Iterating over an array
const numbers = [1, 2, 3];
for (let num of numbers) {
  console.log(`for...of loop: ${num}`);
}

// Using break and continue
for (let k = 0; k < 10; k++) {
  if (k === 5) break; // Stops the loop at 5
  if (k % 2 === 0) continue; // Skips even numbers
  console.log(`break/continue example: ${k}`);
} 


// print addition of 1-10
let sum = 0;
let i = 1;
while(i <= 10){
    sum += i;
    i++;
}
console.log(sum);


// print 20 to 1 in decreasing order
let it = 20;
while(it > 0){
    console.log(it);
    it--;
} */