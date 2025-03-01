/* function createPromise(){
    return new Promise(function exec(resolve, reject){
        let x = setTimeout(function giveValue(){
            return 2;
        }, 3000);
        if(x % 2 == 0){
            resolve("Successfull");
        }
        else{
            reject("Rejected");
        }
    })
} */



// example 1
/* function getInt(max) {
    return Math.floor(Math.random() * max);
}

function createPromiseWithTime() {
    return new Promise(function executor(resolve, reject) {
        console.log("Entering the executor callback in the promise constructor");
        setTimeout(function () {
            let num = getInt(10);
            if (num % 2 == 0) {
                resolve(num);
            } else {
                reject(num);
            }
        }, 5000);
        console.log("Exitting the executor callback in the promise constructor");
    });
}

console.log("Starting....");
let p = createPromiseWithTime();
console.log("We are now waiting for the promise to complete");
console.log("Currently my promise object is like...", p);
p
.then(
    function fulfillmentHandler(value){
        console.log("Inside fulfill handler with value : ", value);
        console.log("Promise after fulfill is : ", p);
    },
    function rejectionHandler(value){
        console.log("Inside reject handler with value : ", value);
        console.log("Promise after reject is : ", p);
    }
); */





/* function getInt(max) {
    return Math.floor(Math.random() * max);
}

function createPromiseWithTime() {
    return new Promise(function executor(resolve, reject) {
        console.log("Entering the executor callback in the promise constructor");
        setTimeout(function () {
            let num = getInt(10);
            if (num % 2 == 0) {
                resolve(num);
            } else {
                reject(num);
            }
        }, 1000);
        console.log("Exitting the executor callback in the promise constructor");
    });
}

console.log("Starting....");
let p = createPromiseWithTime();
console.log("We are now waiting for the promise to complete");
console.log("Currently my promise object is like...", p);

console.log("Going to register my first set of handlers");
p
.then(
    function fulfillmentHandler(value){
        console.log("Inside fulfill handler 1 with value : ", value);
        console.log("Promise after fulfill is : ", p);
    },
    function rejectionHandler(value){
        console.log("Inside reject handler 1 with value : ", value);
        console.log("Promise after reject is : ", p);
    }
);

console.log("Going to register my second set of handlers");
p
.then(
    function fulfillmentHandler(value){
        console.log("Inside fulfill handler 2 with value : ", value);
        console.log("Promise after fulfill is : ", p);
    },
    function rejectionHandler(value){
        console.log("Inside reject handler 2 with value : ", value);
        console.log("Promise after reject is : ", p);
    }
);

console.log("Ending...");

for(let i = 0; i < 10000000000; i++){}

setTimeout(function exec(){
    console.log("Global timer 0s");
}, 1000); */



// example 2
function createPromise(){
    return new Promise(function exec(resolve, reject){
        console.log("Resolving the promise");
        resolve("Done");
    });
}

setTimeout(function exec(){
    console.log("Timer completed");
}, 0);

let p = createPromise();
p.then(
    function fulfillmentHandler1(value){
        console.log("Inside fulfill handler 1 with value : ", value);
    },
    function rejectionHandler(value){}
);
p.then(
    function fulfillmentHandler2(value){
        console.log("Inside fulfill handler 2 with value : ", value);
    },
    function rejectionHandler(value){}
);
p.then(
    function fulfillmentHandler3(value){
        console.log("Inside fulfill handler 3 with value : ", value);
    },
    function rejectionHandler(value){}
)


for(let i = 0; i < 10000000000; i++){}

console.log("Ending...");