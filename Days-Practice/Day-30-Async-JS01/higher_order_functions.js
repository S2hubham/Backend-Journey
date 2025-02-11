// A higher-order function is a function that does one of the following:
// 1)Takes another function as an argument.
// 2)Returns another function as its result.

/* function fun(x, fn){
    console.log(x);
    console.log(fn);
    fn();
}

fun(10, function exec(){
    console.log("I am expression passed to a HOF");
}) */





/* let arr = [1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, -1, -2, -10];
arr.sort();
console.log(arr); */

/* The .sort() method in JavaScript sorts elements as strings by default, not as numbers. 
This is why you see unexpected results when sorting numbers. 
0 -> A
1 -> B
2 -> C
3 -> D
4 -> E
5 -> F
6 -> G
7 -> H
...

[1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, -1, -10, -2]
[B, BA, J, BAA, BAAA, BB, BC, BD, BE, C, -B, -BA, -C]  // after converting to string
[-B, -BA, -C, B, BA, BAA, BAAA, BB, BC, BC, BE, C, J]  // after sorting
[-1, -10, -2, 1, 10, 100, 1000, 11, 12, 13, 14, 2, 9]  // -ve values are placed before but same logic
*/


// better approach for sorting,  as sort function is higher order function it takes comparator function as argument 
/* let arr2 = [1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, -1, -2, -10];
arr2.sort(function cmp(a, b){
    // if a < b -> a-b will be negative -> if cmp function will give negative then a will be placed before b
    // else a > b -> a-b will be positive -> if cmp function will give positive then b will be placed before a
    return a - b; 
});
console.log(arr2); */