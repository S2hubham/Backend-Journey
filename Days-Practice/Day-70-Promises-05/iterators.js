// imperative v/s declarative language

// custom iterator similar to inbuilt iterator
function fetchNextElement(array){
    let idx = 0;
    function next(){
        if(idx == array.length){
            return {value : undefined, done : true};
        }
        const nextelement = array[idx];
        idx++;
        return {value : nextelement, done : false};
    }
    return {next};
}

const automaticFetcher = fetchNextElement([1, null, 3, 4, 5]);
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());




/* 
with every iterator we get next function and caling this next function will fetch data for u without implementing the code
structure of next()
    {
        value : actual value you fetched by calling next(),
        done : tell whether ypu consumed all the values from collecction or not (true / false)
    }

*/
