/* let obj = {
    // by default return [object object] and its return type is string
    toString(){
        // return 10;
        return "Shubham";
    },  

    // by default return same object (here obj)  and its return type is object
    valueOf(){
        return 10;
    }
};
console.log(obj.toString());
console.log(typeof obj.toString());

console.log(obj.valueOf());
console.log(typeof obj.valueOf());

console.log(10 - {}); // NaN

 */

// 4 cases

/* let obj1 = { x : 9, y : 8 };

console.log(100 - obj1);  // 100 - [object object] = 100 - NaN = NaN

let obj2 = { x : 7, valueOf(){return 99} };

console.log(100 - obj2);   //100 - 99 = 1

let obj3 = { x : 8, toString(){return "88"} };

console.log(90 - obj3);   // 90 - 88 = 2

let obj4 = { x : 7, toString(){return {}} };

console.log(100 - obj4);   // toString() and valueOf() loop elements are iterated in array so it throws TypeError

console.log(obj2 - obj3);
 */

let obj = {};
console.log(1 + '2');
console.log(1 + obj);    // 1 + [object object] hence concatenation happens
console.log('1' + obj);