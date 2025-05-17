"use strict";
// let arr=["apple","banana","watermelons","plums"];
// console.log(arr);
// console.log(arr.length);

// mix value
// let arr1=['apple', {name: "Shalin"}, true,function() { alert('welcome');}];
// console.log(arr1);

// push pop and shift
// let fruit=['apple','banana','orange'];
// console.log(fruit);
// console.log(`Pop function : ${fruit.pop()}`);
// console.log(`${fruit}`);
// console.log(`Push function : ${fruit.push('orange')}`);
// console.log(`${fruit}`);
// console.log(`Shift function : ${fruit.shift()}`);
// console.log(`${fruit}`);
// console.log(`Unshift function : ${fruit.unshift('apple')}`);
// console.log(`${fruit}`);

//internals
// let arr = ['apple','banana'];
// let arr2 = arr;
// console.log(arr === arr2);
// arr2.push('orange');
// console.log(arr);

// program
// let arr=['apple','banana','orange','graps','watermelons'];
// for(let i = 0 ; i < arr.length ; i++ )
// {
//     console.log(arr[i]);
// }

// PROGRAM with for...of
// let arr=['apple','banana','orange','graps','watermelons'];
// for(let fruit of arr)
// {
//     console.log(fruit);
// }

// program for...in
// let arr=['apple','banana','orange','graps','watermelons'];
// for(let key in arr)
// {
//     console.log(arr[key]);
// }

// //multidimentional array
// let matrix=[[1,2,3],
//             [4,5,6],
//             [7,8,9]];
// console.log(matrix);
// console.log(matrix[1][1]);

// toString
// let arr=[1,2,3];
// console.log(arr);
// console.log(String(arr) === '1,2,3');

//solution 
// let fruit=['apple','banana','graps'];
// let shop=fruit;
// shop.push('watermelon');
// console.log(fruit.length);

// solution
// let styles=['jazz','blues'];
// let middle;
// console.log(`Create array : ${styles}`);
// styles.push('rock-n-roll');
// console.log(`append rock-n-roll : ${styles}`);
// middle=styles.length/2;
// console.log(`array middle value : ${parseInt(middle)}`);
// styles[1]='classic';
// console.log(styles);
// console.log(`Strip off first value : ${styles.shift()}`);
// console.log(styles);
// console.log(`Strip off first value : ${styles.unshift('rap','raggae')}`);
// console.log(styles);

//splice keyword
// let arr=["I","Study","JavaScript","right","now"];
// console.log(arr);
// arr.splice(0,2,"We","want"); // (starting delete element, ending delete element, add element, add element )
// console.log(arr);

//slice
// let arr=['S','h','a','l','i','n'];
// console.log(arr.slice(0,4));

//forEach
// let fruit=['apple','banana','graps'];
// fruit.forEach(console.log);

//searching in array
// let fruit=['apple','banana','graps'];
// console.log(fruit.indexOf('banana'));

//includes methods handles NaN
// let arr=[NaN];
// console.log(`include handle NaN : ${arr.includes(NaN)}`);
// console.log(`indexOf handle NaN : ${arr.indexOf(NaN)}`);

// find keyword
// let user=[{id:1, name:"Shalin"},
//         {id:2, name:"Meet"},
//         {id:3, name:"Smit"}];
// let admin = user.find( item => item.id === 1);
// console.log(admin.name);

//findIndex
// let user=[{id:1, name:"Shalin"},
//         {id:2, name:"Meet"},
//         {id:3, name:"Smit"}];
// console.log(user.findIndex(admin => admin.name === "Shalin"));

// filter
// let user=[{id:1, name:"Shalin"},
//         {id:2, name:"Meet"},
//         {id:3, name:"Smit"}];
// let admin=user.filter(item => item.id < 3);
// console.log(admin.length);

// mapping
// let user=[{id:1, name:"Shalin"},
//         {id:2, name:"Meet"},
//         {id:3, name:"Smit"},
//         {id:4, name:"Pratik"}].map(item=>item.name.length);
// console.log(user);

//sorting
// let user=[{id:1, name:"Shalin"},
//         {id:2, name:"Meet"},
//         {id:3, name:"Smit"}];
// user.reverse();
// console.log(user);

//spliting
// let arr='shalin,meet,smit';
// let arr1=arr.split(',');
// for(let arr of arr1)
// {
//     console.log(arr);
// }

// localcompair
// let country=['India','America','Singapur'];
// console.log(country.sort((a,b)=>a.localeCompare(b))); // to compair array content and sort them

// reduce keyword
// let arr=[1,2,3,4,5];
// let result=arr.reduce((sum, current)=>sum+current,0);
// console.log(result);

//task1
// function camelize(str)
// {
//     return str
//     .split('-')
//     .map(
//         (word,index)=>index===0 ? word : word[0].toUpperCase() + word.slice(1)
//         )
//         .join('');
// }
// console.log(camelize("Background-color"));

//task2
function filterRange(arr,a,b)
{
    return arr.filter(item => (a <= item && b <= item));
}
let arr = [5,3,8,1];
let filtered = filterRange(arr,1,4);
console.log(filtered);
console.log(arr); 