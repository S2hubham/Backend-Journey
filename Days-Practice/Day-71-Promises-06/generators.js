function* fetchData(){
    console.log("Inside the generator");
    const x = 10;
    console.log(yield 11);   // first computation happens so it gets out as soon as it encounters the yield and the for next call yield will be replaced with 55
    // yield {name : "Shubham"};
    console.log("Entering after a yield");
    const y = x + (yield 30);   // as soon as the yield is called it returns with { value: 30, done: false } and doesnt compute the expression the expression is computed in next call
    console.log("Value of y is", y);
}

console.log("Start");
const iter = fetchData();
console.log(typeof iter);
console.log("Called generator");

console.log("First", iter.next());
console.log("Second", iter.next(55));  // this value is not used hence it doesnt have any significance like below one
console.log("Third", iter.next(8));    // this value is sent at the place wher the execution was stopped here at the expession 'const y = x + (yield 30);'


// Note : for every next call the fetchData is pushed on call stack