"use strict";

// window object
// var gVar = 15; // var is global variable
// console.log(window.gVar);

// let gLet = 15; // let is not global variable 
// console.log(window.gLet);

// we can also create global object using window
window.global = { // we c
    name : "Johan",
    age : 23
}
console.log(global.name);
console.log(window.global.age);
function f(a)
{
    a = global;
    console.log(a);
}
f();
console.log(global);