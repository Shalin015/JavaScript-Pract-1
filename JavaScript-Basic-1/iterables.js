"use strict";
// let range={
//     start:1,
//     end:5,
//     [Symbol.iterator](){ // make arraylike iterator using Symbol.iterator 
//         this.start1=this.start;
//         return this;
//     },
//     next()
//     {
//         if(this.start1<=this.end)
//         {
//             return {
//                 done : false,
//                 value : this.start1++
//             };
//         }
//         else
//         {
//             return{
//                 done : true 
//             }
//         }
//     }
// };
// for(let num of range){
//     console.log(num);
// }

// call an iterator explicite
// let arr = 'Shalin';
// let str = arr[Symbol.iterator]();
// console.log(str);
// while(true)
// {
//     let result=str.next();
//     if(result.done) break;
//     console.log(result.value);
// }

// array-like
// let arrayLike = {
//     name: 'Shalin',
//     age: 23
// };
// for(let key of arrayLike)
// {
//     console.log(key);
// }

//convert arraylike to array for iterator
let arrayLike = {
    name : 'Shalin',
    age : 23,
    length : 2
};
let array=Array.from(arrayLike);
console.log(array);
let arr=[{
    name : "Max",
    age : 22
}];
for(let key of arr)
{
    array.push(key);
}
console.log(array);
