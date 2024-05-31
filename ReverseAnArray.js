const arr = [1, 2, 3, 4, 5];

// First Approach 

// This solution needs extra space

const reverseArr = [];
for(let i=arr.length-1 ;i >=0 ;i--){
reverseArr.push(arr[i]);
}

console.log(reverseArr, 'Reverse Array');


// Second Approach

let l=0, r= arr.length-1 ;
 while(l< r){
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++;r--;
 }

console.log(arr, 'Array');