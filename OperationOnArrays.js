// Problem Statement: Given an array, an element, and a position, write a function in JavaScript to insert the element at the specified position in the array. If the position is greater than the length of the array, append the element at the end.

// let array = [1, 2, 4, 5];
// let result = insertAtPosition(array, 3, 2);
// console.log(result);  // Expected output: [1, 3, 2, 4, 5]


function InsertAtIthPosition (arr, pos, elem){
    console.log(arr.length, pos, elem, '!!!!!!!!!!!!!!!!');
    for (let i=0;i<arr.length;i++){
    console.log(arr[i], '!!!!!!!!!!!!!!!!#############', i-1, pos);

        if(i === pos){
    // console.log(arr, pos, elem, "$$$$$$$$$$$$$$$")

            arr[i] = elem;
        } else if( i >= pos){
            arr[i+1]= arr[i]
        } else {
            arr[i] =arr[i]
        }
    }
//  return arr;
}

console.log(InsertAtIthPosition([1,2,3,4,5,6,7,8,9,10], 5, 50));