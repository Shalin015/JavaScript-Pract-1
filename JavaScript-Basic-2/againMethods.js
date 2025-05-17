"use strict";

// push : add element from last position
// let arr = ["Hello", "Everyone", "Good", "Morning"]
// let arr0 = [];
// arr0.push(arr) // add element from arr to arr0 at last index;
// console.log(arr0)

// pop : remove element from last position
// let arr = ["Hello", "Everyone", "Good", "Morning"];
// console.log(arr.pop(1)); // it will remove element from last index and print remove element

// shift : remove element from first index
// let arr = ["Hello", "Everyone", "Good", "Morning"];
// console.log(arr.shift(1)); // it will remove element from first index and print remove element

// unshift : add element from begining position
// let arr = ["Hello", "Everyone", "Good", "Morning"];
// console.log(arr.unshift("Dear")); // it will add element from first index and print number element

// splice : remove element we want to remove and also at that position we can add new elements
// let arr = ["Hello", "Everyone", "Good", "Morning"]
// console.log(arr.splice(1,2)); // it will print remove elements splice(starting element, number of elements)

// let arr = ["Hello", "Everyone", "Good", "Morning"]
// arr.splice(1,1,"Shalin") // also we can add element at deleted elements;
// console.log(arr);

// slice : copy element which we want to print it will not effect main array also we give negative position into it
// let arr = ["Hello", "Everyone", "Good", "Morning"];
// console.log(arr.slice(1,-1)); // element copy which we want to print

// concat : merge elements at last 
// let arr = ["Hello", "Everyone", "Good", "Morning"];
// console.log(arr.concat(["welcome"]));

// forEach : when we want array element one by one but it will not return any thing we have to push or store element in external variable
// let a = [10,15,16,12,19,99,23];
// let b = [];
// a.forEach((values)=>{  // take value from a array one by one
//     b.push(values); // add values one by one in b array
// })
// console.log(b);

// find : when we want to find particular value for that we can use
// let users = [
//     {id: 1, name: "Johan"},
//     {id: 2, name: "pete"},
//     {id: 3, name: "Mary"}
// ];
// let user = users.find(item => item.id == 1); // find element from users
// console.log(user.name);

// filter : we want to do some action and get specific output
// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
//   ];
// let a = users.filter(item=>{ // we want to apply any action and want specific detail for that 
//     return item.id<2;
// })
// console.log(a);

// map : when array length is decided and want to create new array and add values on it
// let users = [
//         {id: 1, name: "John"},
//         {id: 2, name: "Pete"},
//         {id: 3, name: "Mary"}
//       ];
// let user = users.map((values)=>{
//     if(values.id !== null)
//     {
//         return values;
//     }
// })
// console.log(user);


