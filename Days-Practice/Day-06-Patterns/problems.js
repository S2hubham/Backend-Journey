//----pattern problems


// console.log("abc" + 10); logic for printing


let n = 5;
/*
// pattern 1
****
****
****
****

for(let i = 0; i < n; i++){
    let stars = "";
    for(let j = 0; j < n; j++){
        stars += "*    ";
    }
    console.log(stars);
    console.log();
} */


/* 
// pattern 2
---*
--**
-***
****

for(let row = 1; row <= n; row++){
    let ans = "";
    let spaces = n-row;
    for(col = 1; col <= spaces; col++){
        ans += "     ";
    }
    let stars = row;
    for(let col = 1; col <= stars; col++){
        ans += "*    ";
    }
    console.log(ans);
    console.log();
}*/


/* // pattern 3
---*
--***
-*****
*******

for(let row = 1; row <= n; row++){
    let ans = "";
    let spaces = n-row;
    for(col = 1; col <= spaces; col++){
        ans += "-    ";
    }
    let stars = (2*row - 1);
    for(let col = 1; col <= stars; col++){
        ans += "*    ";
    }
    console.log(ans);
    console.log();
} */


    
/* // pattern 4
****
***
**
*

for(let row = 1; row <= n; row++){
    let ans = "";
    let stars = (n-row+1);
    for(let col = 1; col <= stars; col++){
        ans += "*    ";
    }
    console.log(ans);
    console.log();
} */


/* // pattern 5
--*
-***
*****
-***
--*

for(let row = 1; row <= n; row++){
    let ans = "";
    let spaces = n-row;
    for(col = 1; col <= spaces; col++){
        ans += "     ";
    }
    let stars = (2*row - 1);
    for(let col = 1; col <= stars; col++){
        ans += "*    ";
    }
    console.log(ans);
    console.log();
}
for(let row = 1; row < n; row++){
    let ans = "";
    let spaces = row;
    for(col = 1; col <= spaces; col++){
        ans += "     ";
    }
    let stars = 2*(n-row)-1;
    for(let col = 1; col <= stars; col++){
        ans += "*    ";
    }
    console.log(ans);
    console.log();
} */


/* // pattern 6
*---*
**-**
*****
**-**
*---*

for(let row = 1; row <= (n-1)/2; row++){
    let ans = "";
    let stars = row;
    for(let col = 1; col <= stars; col++){
        ans += "*    ";
    }
    let spaces = n - 2 * stars;
    for(col = 1; col <= spaces; col++){
        ans += "     ";
    }
    for(let col = 1; col <= stars; col++){
        ans += "*    ";
    }
    console.log(ans);
    console.log();
}
let seq = "";
for(let i = 0; i < n; i++){
    seq += "*    ";
}
console.log(seq);
console.log();

for(let row = 1; row <= (n-1)/2; row++){
    let ans = "";
    let stars = (n-1)/2 - row + 1;
    for(let col = 1; col <= stars; col++){
        ans += "*    ";
    }
    let spaces = n - 2 * stars;
    for(col = 1; col <= spaces; col++){
        ans += "     ";
    }
    for(let col = 1; col <= stars; col++){
        ans += "*    ";
    }
    console.log(ans);
    console.log();
}  */


/* // pattern 7
---1---
--121--
-12321-
1234321

for(let row = 1; row <= n; row++){
    let ans = "";
    let spaces = n - row;
    for(col = 1; col <= spaces; col++){
        ans += "-    ";
    }
    for(let col = 1; col <= row; col++){
        ans += `${col}    `;
    }
    for(let col = row; col > 1; col--){
        ans += `${col-1}    `;
    }
    console.log(ans);
    console.log();
} */








//-----Miscellaneous fundamental topics
// post increment
/* let a = 5;
let result = a++; // The current value of a (5) is assigned to result, then a is incremented.
console.log(result); // Output: 5
console.log(a); */      // Output: 6

// pre increment
/* let a = 5;
let result = ++a; // a is incremented first (to 6), then the updated value is assigned to result.
console.log(result); // Output: 6
console.log(a);      // Output: 6
 */


// post decrement
/* let a = 5;
let result = a--; // The current value of a (5) is assigned to result, then a is decremented.
console.log(result); // Output: 5
console.log(a);      // Output: 4
 */

// pre decrement
/* let a = 5;
let result = --a; // a is decremented first (to 4), then the updated value is assigned to result.
console.log(result); // Output: 4
console.log(a);      // Output: 4
 */



// ternary operators
/* let age = 18;
let access = age >= 18 ? "Granted" : "Denied";
console.log(access); // Output: Granted

age = 25;
let category = age < 13 ? "Child" : age < 20 ? "Teenager" : "Adult";
console.log(category); // Output: Adult */


// switch case
/* let role = "editor";

switch (role) {
  case "admin":
    console.log("Full access");
    break;
  case "editor":
    console.log("Can edit content");
    break;
  case "viewer":
    console.log("Can view content");
    break;
  default:
    console.log("No access");
} */



// problem : find roots of quadratoc function ax^2+bx+c
/* function roots(a, b, c){
    let sroot = Math.sqrt(b*b - 4*a*c);
    let root1 = (-b + sroot) / (2*a);
    let root2 = (-b - sroot) / (2*a);   
    console.log(root1, root2);
}

roots(2, 5, 3); */