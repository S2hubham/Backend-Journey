// Merge Sorted Array

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
// let nums1 = [1, 3, 4, 8, 9];
// let nums2 = [0, 3, 5, 9, 10, 11];
let ans = [];

let n1 = nums1.length, n2 = nums2.length;
let l = 0, r = 0, i = 0;

while(l < n1 && r < n2){
    if(nums1[l] <= nums2[r]){
        ans[i++] = nums1[l];
        l++;
    }
    else{
        ans[i++] = nums2[r];
        r++;
    }
}
while(l < n1){
    ans[i++] = nums1[l];
    l++;
}
while(r < n2){
    ans[i++] = nums2[r];
    r++;
}

for(let k = 0; k < ans.length; k++){
    nums1[k] = ans[k];
}
console.log(nums1);