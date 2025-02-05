// NOTE : if the var is not found during accessing it we look for one scope out till we find it else throw error


// lexical scoping
/* var teacher = "Sanket";    // teacher -> global -> Sanket
function ask(question){    // ask -> global
    console.log(teacher, question);   // Sanket why
}
function fun(){            // fun -> global
    var teacher = "Pulkit"; // teacher -> fun -> Pukit(but of fun only)
    ask("why");
}
fun(); */




/* 
Dynamic Scoping (Bash-like Pseudocode)
x=10
function outer() {
    local x=20
    inner  # No local x, so it checks caller scope!
}
function inner() {
    echo $x  # Finds x from caller (outer)
}
outer

o/p -> 20 and not 10
*/
