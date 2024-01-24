"use strict";

// input = [1,2,3,4]
// output = [2,4,6,8]

const arr = [1, 2, 3, 4];
function bcd(arr,callbackfun) {
  const arr1 = arr.map((values) => callbackfun(values,2));
  console.log(arr1);
}
const callbackfun=(a,b)=>a*b
bcd(arr,callbackfun);
