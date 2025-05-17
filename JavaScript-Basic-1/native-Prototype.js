"use strict";

// let arr = [1,2,3,4,5];
// console.log(arr.__proto__ === Array.prototype); // it will traget inside object property
// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__ === Object.prototype); // it will target inherit object property
// console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__.__proto__.__proto__ === null); // it will target window
// console.log(arr.__proto__.__proto__.__proto__);

// let obj = {
//     name : 'Denial',
//     lastName : 'Jack'
// };
// let obj2 = {
//     __proto__ : obj
// };
// console.log(obj2.__proto__);
// console.log(obj2.__proto__ === Object.prototype);
// console.log(obj2.__proto__.__proto__);
// console.log(obj2.__proto__.__proto__.__proto__);

// change native prototype
// if(!String.prototype.repeat){
//     String.prototype.repeat = function(n){
//         return new Array(n + 1).join(this);
//     };
// }
// console.log("Boom ".repeat(3));

// borrowing prototype
let obj = {
    0 : 'Hello',
    1 : 'World',
    length : 2
};
obj.join = Array.prototype.join;
console.log(obj.join(' '));