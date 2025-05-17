"use strict";

// bind function
// let user = {
//     name : "max"
// };
// function func(){
//     console.log(this.name); // take value from user object
// }
// let funcUser = func.bind(user); // execute function later on
// funcUser();

// array bind
// let user = [15,12,99]; 
// function func(...arg){ // take rest arguments from user
//     let sum = 0;
//     console.log(arg);
//     for(let i of user) // take value from array one by one
//     {
//         sum += i; // sum of array elements
//     }
//     return sum;
// }
// let funcUser = func.bind(user); // bind function
// console.log(funcUser());

// object method
// let user = {
//     name : 'Max',
//     compay : 'Indian Fox',
//     sayHi(){
//         console.log("Hello, ", this.name);
//     },
//     back(){
//         console.log("Welcome to ",this.compay);
//     }
// };
// let sayHi = user.sayHi.bind(user);
// let back = user.back.bind(user);
// sayHi();
// setTimeout(back,3000);
// user = {
//     sayHi()
//     {
//         console.log("Another use setTimeout");
//     }
// };

// partial function 
// bind with argument
// function sum(a,b){
//     return a+b;
// }
// let sum1 = sum.bind(null,15);
// console.log(sum1(12));

// task 
function f(){
    console.log(this);
}
let user = {
    g: f.bind(null)
}; 
user.g();