/* // --[Functions]--


function isEvenOrOdd(num){
    if(num % 2 == 0){
        console.log(`${num} is Even`);
    }
    else{
        console.log(`${num} is Odd`);
    }
}

for(let i = 0; i < 10; i++){
    isEvenOrOdd(i);
} */






// let x = console.log("Shubham");
// console.log(x);





// example of returning undefined automatically
/* function welcome(name){
    console.log("Hello", name, "Welcome to JS");
}
let result = welcome("Shubham");
console.log(result); */





// parameters
/* function add(a, b){
    let c = a + b;
    return c;
}

let a = 10, b = 30;
let result = add(a, b);   //argumments
console.log(result);
 */





// is prime
/* function isPrime(x){
    if(x < 2) return false;
    let inc = 1;
    for(let i = 2; i*i <= x; i++){
        console.log(inc++);
        if(x % i == 0){
            return false;
        }
    }
    return true;
}

if(isPrime(49)){
    console.log("Is prime");
}
else{
    console.log("Is not prime");
} */