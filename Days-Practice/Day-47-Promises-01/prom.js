/* function getInt(max){
    return Math.floor(Math.random() * max);
}

function createPromiseWithLoop(){
    return new Promise(function executor(resolve, reject){
        for(let i = 0; i < 1000000000; i++){};
        let num = getInt(10);
        if(num % 2 == 0){
            resolve(num);
        }
        else{
            reject(num);
        }
    });
}

let x = createPromiseWithLoop();
console.log(x); 

o/p => 
Promise {<fullfilled>: 2} 
[[Prototype]] :Promise
[[PromiseState]]: "fulfilled"
[[PromiseResu1t]]: 2

OR 

Promise {<rejected>: 3}
[[Prototype]] : Promise
[[PromiseState]]: "rejected"
[[PromiseResu1t]]: 3

*/



/* function getInt(max){
    return Math.floor(Math.random() * max);
}

function createPromiseWithTime(){
    return new Promise(function executor(resolve, reject){
        setTimeout(function (){
            let num = getInt(10);
            if(num % 2 == 0){
                resolve(num);
            }
            else{
                reject(num);
            }
        }, 5000);
    });
}

let x = createPromiseWithTime();
console.log(x); */



/* function getInt(max){
    return Math.floor(Math.random() * max);
}

function createPromiseWithTime(){
    return new Promise(function executor(resolve, reject){
        setTimeout(function (){
            let num = getInt(10);
            if(num % 2 == 0){
                console.log("Fulfilled");
                return num;
            }
            else{
                console.log("Rejected");
                return num;
            }
        }, 5000);
    });
}

let x = createPromiseWithTime();
console.log(x); 

The promise will be in pending state forever as nothing is called
*/



/* function getInt(max){
    return Math.floor(Math.random() * max);
}

function createPromiseWithTime(){
    return new Promise(function executor(resolve, reject){
        setTimeout(function (){
            let num = getInt(10);
            if(num % 2 == 0){
                resolve(num, 10, 20);
            }
            else{
                reject(num, 10, 20);
            }
        }, 5000);
    });
}

let x = createPromiseWithTime();
console.log(x); */



/* function getInt(max){
    return Math.floor(Math.random() * max);
}

function createPromiseWithTime(){
    return new Promise(function executor(resolve, reject){
        setTimeout(function (){
            let num = getInt(10);
            if(num % 2 == 0){
                console.log("Fulfilling");
                resolve(num);
                console.log("Fulfilled");
                resolve(num);
                console.log("Fulfilling again");
                resolve(num);
            }
            else{
                console.log("Rejecting");
                reject(num);
                console.log("Rejected");
                reject(num);
                console.log("Rejecting again");
                reject(num);
            }
        }, 5000);
    });
}   

let x = createPromiseWithTime();
console.log(x); */