var teacher = "Sanket";         
function fun(){  
    console.log(teacher);
    console.log(content);      // throws error -> TDZ (temporal dead zone)
    
    var teacher = "Pulkit";
    let content = "JS";
    if(content == "JS"){
        console.log(hours);   // throws error -> TDZ (temporal dead zone)
        let hours = "120+";
        console.log(hours);
    }
    console.log(teacher, content);
}

fun();
console.log(teacher);
console.log(content);        // throws error -> out of block scope