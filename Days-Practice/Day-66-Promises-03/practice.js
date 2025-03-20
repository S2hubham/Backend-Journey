// NOTE : priority
// call stack(global code) > micro tasks > macro tasks / callback queue



/* function fetchData(url){
    return new Promise(function (resolve, reject){
        console.log("Started downloading from", url);
        setTimeout(function processDownloading(){
            let data = "Dummy data6";
            console.log("Download Completed");
            resolve(data);
            console.log("Hii");
        }, 7000);
    });
}

console.log("Start");
let promiseObj = fetchData("eiwfjoifneio");
console.log(promiseObj);
promiseObj
.then(function A(value){
    console.log("Value is", value);
})

console.log("End"); */




/* console.log("Start of the file");

setTimeout(function timer1(){
    console.log("Timer 1 done");
}, 0);

for(let i = 0; i < 10000000000; i++){}

let x = Promise.resolve("Shubham's Promise");
x.then(function processPromise(value){
    console.log("Whose promise ? ", value);
})

setTimeout(function timer2(){
    console.log("Timer 2 done");
}, 0);

console.log("End of the file"); */



/* function blocking_for_loop(){
    for(let i = 0; i < 10000000000; i++){}
}

console.log("Start of the file");

setTimeout(function timer1(){
    console.log("Timer 1 done");
}, 0);

blocking_for_loop();

let x = Promise.resolve("Shubham's Promise");
x.then(function processPromise1(value){
    console.log("Whose promise ? ", value);
    blocking_for_loop();
})

let y = Promise.resolve("Shubham's Promise");
y.then(function processPromise2(value){
    console.log("Whose promise ? ", value);
    setTimeout(function (){console.log("OK, done");}, 0);
})

let z = Promise.resolve("Shubham's Promise");
z.then(function processPromise3(value){
    console.log("Whose promise ? ", value);
})

setTimeout(function timer2(){
    console.log("Timer 2 done");
}, 0);

console.log("End of the file"); */



// Inversion of control
/* function download(url, cb){
    console.log("Started downloading from url", url);
    setTimeout(function exec(){
        console.log("Completed downloading after 5s");
        const content = "ABCDEF";
        cb(content);  
        cb(content);     //mutiple calls
        // or doesn't call at all
    }, 5000);
}

download("www.xyz.com", function processDownload(data){
    console.log("Downloaded data is ", data);
}) */



/* function download(url){
    console.log("Started downloading from url", url);
    return new Promise(function exec(res, rej){
        setTimeout(function exec(){
            console.log("Completed downloading after 5s");
            const content = "ABCDEF";
            res(content);
        }, 5000);
    })
    
}

download("www.xyz.com")
.then(function processDownload(data){  // this is the callback that i was passing in previous code which was causing inversion of control as it was executed by the download function
    console.log("Data is ", data);
}) */
// but now i control how ans when to execute the callback
// the download function now cannot call it twice or thrice and also avoid from not calling it
// hence inversion of control is resolved using promise
// now even if the promise is not resolved ever the promise will be in pending state and i can still control the callback 