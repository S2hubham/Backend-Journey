function* myGenerator() {
    console.log("Shubham");
    yield 1;
    console.log("Kokane");
    yield 2;
    yield 3;
}

const gen = myGenerator();
console.log(gen.next()); // shubham and  { value: 1, done: false }
console.log(gen.next()); // kokane and { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }



// yeiding another generator function
function* outer() {
    yield 1;
    yield* inner();
    yield 4;
}

function* inner() {
    yield 2;
    yield 3;
}

const gene = outer();
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next()); 



// passing value to generators
function* generator() {
    const x = yield "Enter value:";
    yield `You entered: ${x}`;
}

const gener = generator();
console.log(gen.next());      // { value: 'Enter value:', done: false }
console.log(gen.next(42));    // { value: 'You entered: 42', done: false }
console.log(gen.next());      // { value: undefined, done: true }




// fibonacci series example
function* fibonacci() {
    let [a, b] = [0, 1]; // Initialize a = 0, b = 1
    while (true) {
        yield a;          // Pause and return current value of 'a'
        [a, b] = [b, a + b]; // Update values AFTER resuming
    }
}

const fib = fibonacci();

console.log(fib.next().value); // 0 (First yield, stops here)
console.log(fib.next().value); // 1 (Resumes, updates: a = 1, b = 1)
console.log(fib.next().value); // 1 (Resumes, updates: a = 1, b = 2)
console.log(fib.next().value); // 2 (Resumes, updates: a = 2, b = 3)
