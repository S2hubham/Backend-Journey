var teacher = "Sanket";    // teacher -> global -> Sanket
function ask(question){    // ask -> global
    console.log(teacher, question);   // Sanket why
}
function fun(){            // fun -> global
    var teacher = "Pulkit"; // teacher -> fun -> Pukit(but of fun only)
    ask("why");
}
fun();