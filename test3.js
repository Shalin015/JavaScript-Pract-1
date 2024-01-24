"use strict";

// input = [2, 5, 7, 1, 9, 3]
// output = 8 (find maximum difference between this array)  

let arr = [2, 5, 7, 1, 9, 3];
arr = arr.sort((a, b) => a - b);
let index = arr.length - 1;
console.log(arr[index] - arr[0]);
