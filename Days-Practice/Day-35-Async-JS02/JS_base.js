// example for sync nature of JS
// JS is sync in nature for the code that is native to JS
/* console.log("Getting started with coding");

for(let i = 0; i < 1000000000; i++){
    // so task
}

console.log("End of coding"); */





// best examples to understand sync - async working of JS
// Example 1)
/* function timeConsumingByLoop(){
    console.log("Loop start");
    for(let i = 0; i < 1000000000; i++){
        // so task
    }
    console.log("Loop ends");
}

function timeConsumingByRuntimeFeature(){
    console.log("Starting timer");
    setTimeout(function exec(){
        console.log("Completed the timer");
    }, 3000);
}

console.log("Hi");

timeConsumingByLoop();
timeConsumingByRuntimeFeature();
timeConsumingByLoop();

console.log("Bye"); */




// Example 2)
/* function timeConsumingByLoop() {
    console.log("loop starts");
    for(let i = 0; i < 1000000000; i++) {
    // some task
    }
    console.log("loop ends");
}

function timeConsumingByRuntimeFeature0() {
    console.log("Starting timer");
    setTimeout(function exec0() {
        console.log("Completed the timer0");
        for(let i = 0; i < 1000000000; i++) {
            // some task
        }
    }, 5000); // 5 sec timer
}

function timeConsumingByRuntimeFeature1() {
    console.log("Starting timer");
    setTimeout(function exec1() {
        console.log("Completed the timer1");
    }, 0); // 0 s timer
}

function timeConsumingByRuntimeFeature2() {
    console.log("Starting timer");
    setTimeout(function exec2() {
    console.log("Completed the timer2");
    }, 2000); // 2 s timer
}

console.log("Hi");
timeConsumingByLoop();
timeConsumingByRuntimeFeature0();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingByLoop();
console.log("By"); */