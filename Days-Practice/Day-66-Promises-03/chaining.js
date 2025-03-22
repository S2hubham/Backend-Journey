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

let x = download("www.xyz.com")
x.then(function fulfillmenthandler1(value){  
    console.log("Data is -> ", value);
    return "Shubham from previous .then()"
})
.then(function fulfillmenthandler2(value){
    console.log("Data is -> ", value);
}) */




// mdn example of promise chaining
Promise.resolve("Foo")
    .then((string) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                string += "bar";
                resolve(string);
            }, 1000);
        })
    })
    .then((string) => {
        setTimeout(() => {
            string += "baz";
            console.log(string);
        }, 1000);
        return string;
    })
    .then((string) => {
        console.log("Last Then: oops ... didn't bother to instantiate and return in the promise in the prior then so the sequence may be a bit suprising");
        console.log(string);
    })

console.log("Hiii...");``