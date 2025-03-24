/* function process(){
    let i = 0;
    function innerProcess(){
        i += 1;
        return i;
    }
    return innerProcess;
}

let res = process();
console.log(res);

console.log("First call =>", res());
console.log("Second call =>", res());
console.log("Third call =>", res());
console.log("Fourth call =>", res());
console.log("Fifth call =>", res()); */


/* 

{func: f}
func: f innerProcess()
    arguments: null
    caller: null
    length: O
    name: "innerProcess"
    prototype:
    [ [FunctionLocation]]: VM35Ø:3
    [ [Prototype]]: f
    [ [Scopes]]: Scopes[3]
        0: Closure (process) {i; 2}   => this is the main thing which is making it persistent 
        1: Script {obj: res• f}
        2: Global {0: Window, window:....}
[[Prototype]]: Object

*/


// [[scopes]] => Closure


/* function DO(task){
    setTimeout(function exec(){
        console.log(task);
    }, 2000);
}
DO("Shubham"); */



/* function process(){
    let i = 0;
    function innerProcess1(){
        i += 1;
        return i;
    }
    function innerProcess2(){
        i += 1;
        return i;
    }
    return {innerProcess1, innerProcess2};
}

let x = process();
console.log(x);

console.log("1 call =>", x.innerProcess1());
console.log("2 call =>", x.innerProcess2());
console.log("1 call =>", x.innerProcess1());
console.log("2 call =>", x.innerProcess2());
console.log("1 call =>", x.innerProcess1()); 

here even though two functions are keeping track of the i in closure 
updation by any one inner function will update the i, bcoz they are updating the actual value of i by refrencing the memory location
hence the value of i not snapshotted rather original value is updated from memory 

*/
