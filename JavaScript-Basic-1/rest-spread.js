"use strict";

// any nuumber of argument 
// function sumAll(...agrs) 
// {
//     let sum = 0;
//     for(let agr of agrs) // run for...of loop for take all argument one by one 
//     {
//         sum += agr;
//     }
//     return sum;
// }
// console.log(sumAll(5,10,15,20)); // call function and give n number of argument 

// normal rest 
let arr = [1,2,3,4,5];
let [a,b,...c]=arr;
console.log(c);

// check not consider value length
// function multi(firstname, lastname, ...title)
// {
//     console.log(firstname,lastname);
//     console.log("Not consider values length : ",title.length);
//     console.log(title[0]);
//     console.log(title[1]);
// }
// multi('Johan','Devid','Mark','Andreson');

// spread turns array into list
// let arr = [1,2,3,4,5,6,7];
// console.log(Math.max(...arr));

// Mearg 2 array
// let arr = ['Max','Johan','Devid','Mike','Peter'];
// let arr1 = ['Mikle','Warner','Tom','Jack'];
// console.log(arr);
// console.log(arr1);
// arr = [...arr,...arr1];
// console.log('Mearg : ',arr);