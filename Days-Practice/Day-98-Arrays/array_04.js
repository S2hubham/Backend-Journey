//  Find All Numbers Disappeared in an Array

let arr = [4, 3, 2, 7, 8, 2, 3, 1];
let ans = [];
let n = arr.length;

// brute force 
/* for(let i = 1; i <= n; i++){
    if(!arr.includes(i)){
        ans.push(i);
    }
}
    
// TC : O(n^2)
// SC : O(ans size)
*/


// better with array manipulation
for(let i = 0; i < n; i++){
    let ind = Math.abs(arr[i]) - 1;    
    arr[ind] = -Math.abs(arr[ind]);
}

for(let i = 0; i < n; i++){
    if(arr[i] > 0){
        ans.push(i+1);
    }
}

// TC : O(2n)
// SC : O(ans size)


console.log(ans);