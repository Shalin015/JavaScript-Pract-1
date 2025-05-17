"use strict";
// reduce
// let obj= ["Surat","Ahmedabad","Vadodara","Surat"];
// let arr = obj.reduce((prev,current)=>{
//     if(prev.indexOf(current) === -1)
//     {
//         prev.push(current);
//     }
//     return prev;
// },[]);
// console.log(arr); 

//splice 
// let obj=['s','h','a','l','i','n'];
// obj.splice(0,3,"b","e","r"); // in splice (starting point, count of point , element want to add)
// console.log(obj);

//slice
// let obj=['s','h','a','l','i','n'];
// let obj2=obj.slice(0,3);
// console.log(obj2);
// console.log(obj);  // in slice (starting point, end point) copy and display in arrray

//include
// let obj=[1,2,3,4,5]
// console.log(obj.includes(5)); // check elemet is available in array

//indexof
// let obj=[1,2,3,4,5];
// console.log(obj.indexOf(3)); // check elemet position in array

//sort
// let obj=[1,5,2,9,7];
// console.log(obj.sort((a,b)=>a-b)); // when we start sorting in numerical it will convert number to string

//push & pop
// let obj=[1,5,2,9,7];
// obj.push(6); // add element in array
// console.log("push : ",obj); 
// obj.pop(6); // remove element in array
// console.log("pop : ",obj);

//shift & unshift
// let obj=[1,5,2,9,7,6];
// obj.shift(1); // remove one elemet from left side
// console.log("Shift : ",obj);
// obj.unshift(1); // add one element from left side
// console.log("Unshift : ",obj);

//concat
// let obj =[[1,2],[3,4]];
// console.log(obj.concat([5,6])); // connect element with each other

//forEach
// let obj1 = [1,2,3,5,4];
// obj1.forEach((item)=>{
//     item = item + 1;
//     console.log(item);

// }); // forEach not give return value and we want to print that so print under the function otherwise ignore it

//find
// let obj=[{
//     name : "Shalin",
//     age : 23,
//     city : "surat"
// }];
// let user=obj.find(item=>item.city === "surat"); // check city aif condition is true it will copy the data
// console.log(user.name);
// let obj=[1,2,3,4,5,5]
// console.log(obj.find(item=>item<4));

// filter
// let obj=[{
//     id : 15,
//     name : "Shalin" 
// },
// {
//     id : 12,
//     name : "Pratik"
// },
// {
//     id : 20,
//     name : "Smit"
// }];
// let arr=obj.filter(item=>item.id<20); // filter check condition and apply on array 
// console.log(arr);

//map
// let arr=[1,2,3,4,5];
// let arr2=arr.map((item)=>{
//     return item * 2; // create new array apply condition on every element 
// });
// console.log(arr2);

// reverse
// let obj = [1,5,2,9,7,6]
// console.log("Original array : ",obj)
// obj.reverse();
// console.log("Reverse array : ",obj); // reverse array element

//split
// let obj="Shalin Kikaganeshwala";
// let obj2=obj.split(' '); // divide string using particular symbol or letter
// console.log(obj2);
 
// isArray
// let obj = [1,2,3,4,5];
// console.log(Array.isArray(obj)); // check that given variable is array or not

//check same value
let obj= [1,1,1,2,3,4,3];
const count = {};
obj.forEach(Element=>{
    count[Element] = (count[Element] || 0) + 1; 
});
console.log(count);

// given array convert to single
// let arr = [["1","2","3"],
//             [true],
//             [4,5,6]];
// let arr1 = arr.reduce((a,b)=>a.concat(b));
// console.log(arr1);

// prime in array
// let a = [10,5,3,8,9,1,4,3,5,7,9,11,2];
// let b = a.filter((number)=>{
//    for(let i = 2; i < number; i++)
//    {
//     if(number % i == 0)
//     {
//         return false;
//     }
//    }
//    return true;     
// },[]);
// console.log(b);

//task 
// let arr = ["a","b"];
// arr.push(function(){
//     console.log(this);
// });
// arr[2]();

// task 
// function sumInput()
// {
//     let arr=[];
//     while(true)
//     {
//         let value = prompt("Enter values : ",0);
//         if(value === null || value === "" || !isFinite(value))
//             break;
//         arr.push(+value);
//     }
//     console.log(arr);
//     let sum=0;
//     for(let number of arr)
//         sum += number;
//     }
//     return sum;
// }
// console.log(sumInput());

// let obj = {
//     name : "Shalin",
//     age : 23,
//     city : "Surat",
//     state : "Gujarat",
//     country : "India"
// };
// range[Symbol.iterator] = function(){
//     return{
//         name : this.name,
//         age : this.age,
//         city : this.city,
//         state : this.state,
//         country : this.country,

//         next(){
//             if(this.name)
//         }
//     }
// },

//     for(country of obj)
//     {
//         let obj2=obj.find(item => item.city === "Surat");
//         console.log(obj2);
//     }

let arr=[1,2,3,4];
let arr2=[2,4,5,6];
let arr3= arr.concat(arr2);
let arr4=arr3.reduce((a,b)=>
{
    let result=[];
    if(a!=b)
    {
        result.push(b);
        console.log(result);
    }
    return result;
})

