console.log(1 + 1);     //2
console.log('1' + 1, 1 + '1');   //11
console.log('1' - 1);   //0

// Coercion (type conversion)
// ToNumber(10);
console.log(10 - undefined);    //10 - undefined -> 10 - NaN = NaN
console.log(10 - null);         //10 - null -> 10 - 0 = 10
console.log(10 - true);         //10 - true -> 10 - 1 = 9
console.log(10 - false);        //10 - false -> 10 - 0 = 10
console.log(1 - '2hgf55');      //NaN