"use strict";

// {
//   Maharatra: ['Mumbai', 'Pune'],
//   Rajasthan: ['Jaipur'],
//   Gujarat: ['Surat'],
// }


// const arr = [
//   {
//     city: "Mumbai",
//     state: "Maharastra"
//   },
//   {
//     city: "Jaipur",
//     state: "Rajasthan"
//   },
//   {
//     city: "Pune",
//     state: "Maharastra"
//   },
//   {
//     city: "Surat",
//     state: "Gujarat"
//   }
// ];

// const output = arr.reduce((prev, current) => {
//   // const entite = Object.entries(current);
//   // console.log(prev[entite[0][0]]);
//   const {city,state}=current;

//   if (!(state in prev))
//     prev[state] = []

//   prev[state].push(city)

//   return prev;
// }, {});

// console.log(output)

//task 2
// 20{"max","jane"}
// 21{"alice"}

// let obj =[{
//   name : "max",
//   age : 20
// },
// {
//   name : "alice",
//   age : 21
// },
// {
//   name : "jane",
//   age : 20
// }];

// let arr = obj.reduce((pre,current)=>{
//   let {name, age} = current;
//   if(!(age in pre))
//     pre[age]=[];
//   pre[age].push(name);
//   return pre;

// },{});
// console.log(arr);

// task 3
// remove same value element from array
// let arr=[18,21,1,1,51,18,21,5,18,7,10];
// let arr2=arr.reduce((prev,current)=>{
//   if(prev.indexOf(current) === -1) // -1 is null
//   {
//     prev.push(current);
//   } 
//   return prev;
// },[]);
// console.log(arr2);

// task 4
// count how many voter vote
// let voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ];
// let count = voters.reduce((prev,current)=>{
//   let {voted}=current;
//   if(voted === true)
//   {
//     prev=prev+1;
//   }
//   return prev;
// },0);
// console.log(count);

// task-5
// var wishlist = [
//   { title: "Tesla Model S", price: 90000 },
//   { title: "4 carat diamond ring", price: 45000 },
//   { title: "Fancy hacky Sack", price: 5 },
//   { title: "Gold fidgit spinner", price: 2000 },
//   { title: "A second Tesla Model S", price: 90000 }
// ];
// let amount = wishlist.reduce((prev,current)=>{
//   return prev + current.price;
// },0);
// console.log(amount);

// task-6
let obj=[{
  name :"anna",
  books: ["Rich dad Poor Dad+", "Harry Potter"],
  age: 21,
  },
  {
    name: "Bob",
    books: ["War and peace", "Romeo and Juliet"],
    age: 26,
  },
  {
    name: "Alice",
    books: ["The Lord of the Rings", "The Shining"],
    age: 18,
  }
];
let arr = obj.reduce((prev,current)=>
  [...prev,...current.books],["alphabet"],
);
console.log(arr);
