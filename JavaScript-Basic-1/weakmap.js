"use strict";

// key must be a object

// let weakmap = new WeakMap();
// let obj={};
// weakmap.set(obj, "Shalin");
// weakmap.set('Meet', "Meet");

// overwrite the reference 
// let john = { 
//     name : 'Shalin', 
//     age : 23
// }
// let weakMap = new WeakMap();
// weakMap.set(john, '...');
// john = null;
// console.log(john);

// use case: caching
// let cache = new Map();
// function process(obj){
//     if(!cache.has(obj))
//     {
//         let result = obj;
//         cache.set(obj, result);
//         return result;
//     }
//     return cache.get(obj);
// }

let Johan ={
    name : 'Johan',
    age : 23
};
let obj2={};
let obj3 = new WeakMap(); // create a weakmap
obj3.set(Johan,obj2); // add object into weakmap
console.log(obj3);
Johan = null; // remove data it will vanished out into memory
console.log(obj3);

