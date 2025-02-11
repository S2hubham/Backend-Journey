/* function fun(x, fn){
    for(let i = 0; i < x; i++){
        console.log(x+i);
    }
    fn();
}

fun(10, function exec(){    // here exec is call-back function
    console.log("I am expression passed to a HOF");
}) 



setTimeout(function fun(){  //fun is callback here
    console.log("Hiii! SHUBHAM");
}, 4000); */

// swigggy - razorpay inversion control  
/* function processPayment(amount, callback) {
    console.log("Processing payment of ₹" + amount + "...");
    
    setTimeout(() => {
        let success = Math.random() >= 0.5; // Simulating success 50% of the time
        console.log(success);
        if (success) {
            callback(null, "Payment Successful!");
        } else {
            callback("Payment Failed!", null);
        }
    }, 2000);
}

processPayment(500, (error, message) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Success:", message);
    }
}); */





// problems with callbacks

// 1) Inversion of Control (major issue than callback hell) (promises can resolve it)
/* function doTask(fn, x){
    // whole implementation done by team A

    fn(x*x);
    // fn(x*x);  if changes made by team a then mteam B whole working will be affected due to changes my by team A 

}// team A

// here team B tries to use it
doTask(function exec(num){   // due to this call back i am passing control of how exec function should be called to doTask -> this is called as inversion of control
    console.log("Square is : ", num);
}, 9); */




// 2)call back hell
/* function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 completed");
        callback();
    }, 1000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 completed");
        callback();
    }, 1000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 completed");
        callback();
    }, 1000);
}

// Nested callbacks (callback hell)
task1(() => {
    task2(() => {
        task3(() => {
            console.log("All tasks completed");
        });
    });
}); */


// solution using promises and async await
/* function task1() {
    return new Promise(resolve => 
        setTimeout(() => { 
            console.log("Task 1 completed"); 
            resolve(); 
        }, 1000)
    );
}

function task2() {
    return new Promise(resolve => 
        setTimeout(() => { 
            console.log("Task 2 completed"); 
            resolve(); 
        }, 1000)
    );
}

function task3() {
    return new Promise(resolve => 
        setTimeout(() => { 
            console.log("Task 3 completed"); 
            resolve(); 
        }, 1000)
    );
} */


// Using Promise Chaining (better)
/* task1()
    .then(task2)
    .then(task3)
    .then(() => console.log("All tasks completed")); */

// using async await  (best)
/* async function runTasks() {
    await task1();
    await task2();
    await task3();
    console.log("All tasks completed");
}    
runTasks(); */
    