// GCD / HCF of two numbers

/* function gcd(a, b){
    if(a == 0) return b;
    if(b == 0) return a;
    let n = Math.min(a, b);
    for(let i = n; i > 0; i--){
        if(a % i == 0 && b % i == 0){
            return i;
        }
    }
    return 1;

    // or 
    while(b !== 0){
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(gcd(12, 18)); */



// sum of digits of number
/* function sum(num){
    let sum = 0;
    while(num != 0){
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log(sum(4136)); */



// fibonacci
/* function fibonacci(num){
    let slast = 0;
    let last = 1;
    if(num == 0){
        console.log(slast);
        return;
    }
    if(num >= 1){
        console.log(slast);
        console.log(last);
    }

    for(let i = 2; i < num; i++){
        let x = last + slast;
        console.log(x);
        slast = last;
        last = x;
    }
}
fibonacci(3); */

// recursive approach
/* function fib(num, slast, last){
    if(num == 1){
        console.log(slast);
        return;
    }
    if(num == 2){
        console.log(slast);
        console.log(last);
        return;
    }
    console.log(slast);
    fib(num - 1, last, slast + last);
}

fib(3, 0, 1); */





// string comparison
/* console.log("abc" == "abc");
let x = "abc";      //string literal
let y = "abc";      //string literal
console.log(x == y);

let z = String("abc");      //string literal
let a = new String("abc");  //string object (created using new)
console.log(z);

// abstract equality (first checks type if fails then does type conversion then checks for value match and return accordingly)
console.log(a == z);
console.log(a == x);
console.log(z == x);
console.log("abc" == new String("abc"));

// strict equality (first checks type if fails then return false else checks for value match and return accordingly)
console.log(a === z);
console.log(a === x);
console.log(z === x);
console.log("abc" === new String("abc"));

console.log(typeof a);
console.log(typeof z); */