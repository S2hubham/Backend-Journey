{
    console.log(x);
    var x = 10;   //as x doesnt understand block scope it can be accessed for below clog statement
}
console.log(x);


console.log(y);   //this give undefined but not error unlike let 
var y = 10;   



if(false){
    var x = 10;
}
console.log(x);   // doesnt throw error even it is not declared 