// Reversing an array

let arr = [5, 9, 1, 8, 2, 3];
let n = arr.length;
let l = 0, r = n - 1;

while(l < r){
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    l++, r--;
}

console.log(arr);