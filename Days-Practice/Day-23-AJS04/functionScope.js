function fun(){
    console.log(y);
    var y = 10;
}

function gun(){
    console.log(z);     // this throws error and not gives unlike var undefine bcoz it cannot be acessed before its declaration 
    let z = 10;
}

// console.log(z);     // gives error as it was declared using let and let has only function scope so it is not accessible outside the function
gun();