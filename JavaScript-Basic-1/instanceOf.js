"use strict";

// instanceof
// let arr = [1,2,3,4,5];
// console.log(arr instanceof Array); // true it will check the class
// console.log(arr instanceof Object); // true

// customize instance of
// class Animal {
//     static [Symbol.hasInstance](obj){
//         if(obj.canEat) return true;
//     }
// }
// let obj = {
//     canEat : true
// };
// console.log(obj instanceof Animal);

//  check class is extending or not
// class Animal {}
// class Rabbit extends Animal{}
// let rabbit = new Rabbit();
// console.log(rabbit instanceof Animal);

// Object.prototype.toString for the type
// object convert to the string so toString using in object it will show same
// let obj = {};
// console.log(obj); // [object object]
// console.log(obj.toString()); // [object object]

let user = {
    [Symbol.toStringTag] : "User"
};
console.log({}.toString.call(user));