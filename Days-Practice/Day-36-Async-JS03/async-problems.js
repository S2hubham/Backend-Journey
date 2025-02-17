// Imp questions

/* console.log("Hello World!");
setTimeout(function exec(){
    console.log("Timer done...");
}, 0);
console.log("End"); */



/* console.log("Hello World!");
setTimeout(function exec(){
    console.log("Timer done...");
}, 3000);
for(let i = 0; i < 1000000000; i++){
    // some task
}
console.log("End"); */



/* console.log("Hello World!");
for(let i = 0; i < 3; i++){
    setTimeout(function exec(){
        console.log("Timer done...");
    }, 2000);
}
for(let i = 0; i < 1000000000; i++){
    // some task
}
console.log("End"); */



/* 
process.nextTick(() => console.log("Async log"));      // This allows you to schedule a log after the current operation, preventing blocking.
console.log("Hello World!");
setTimeout(function exec(){
    console.log("Timer done 1...");
    setTimeout(function exec(){
        console.log("Timer done 2...");
    }, 2000);
}, 2000);
for(let i = 0; i < 1000; i++){
    // some task
}
console.log("End"); */



/* let count = 0;
let y = setInterval(function exec(){
    count++;
    console.log(count);
    if(count > 15){
        clearInterval(y);
    }
}, 2000); */



/* console.log(process.pid);
console.log(process.platform); */   