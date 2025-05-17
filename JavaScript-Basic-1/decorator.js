"use strict";

// function slow(x) // create function 
// {
//     console.log(`called with ${x}`);
//     return x;
// }
// function cachingDecorator(func){ 
//     let cache = new Map(); // cache map create 
//     return function(x){ // here x take slow() x value
//         if(cache.has(x)) // check that x is available in cache or not
//         {
//             return cache.get(x); // if available then it will return from a cache 
//         }
//         let result = func(x); // if not available then it will take value from slow()
//         cache.set(x,result); // add data in cache
//         return result; // display result
//     };
// }
// slow = cachingDecorator(slow); // give cachingDecorator slow function as a parameter and store in slow 
// console.log(slow(1)); // it will go to cachingDecorator function
// console.log("Again : " + slow(1));
// console.log(slow(2));
// console.log("Again : " + slow(2));

// func.call
// let worker = {
//     someMethod(){
//         return 1;
//     },
//     slow(x){
//         console.log("Called with : ",x);
//         return x * this.someMethod();
//     }
// };
// function cachingDecorator(func){ // first come here 
//     let cache = new Map(); // create cache map 
//     return function(x){ // x value take from worker.slow()
//         if(cache.has(x)) // check value is available or not
//         {
//             return cache.get(x); // if available then take value from there
//         }
//         let result = func.call(this,x); // or else here this go to slow() take that value x value take from slow(x)
//         cache.set(x,result);
//         return result;
//     };
// }
// worker.slow = cachingDecorator(worker.slow); // store cachingDecorator function in worker.slow and give paramter in cachingDecorator
// console.log(worker.slow(1));
// console.log(worker.slow(2));

// Multi argument 
// let worker = { // create object
//     slow(min, max){
//         console.log(`call with ${min}, ${max}`);
//         console.log('from function');
//         return min + max;
//     }
// };
// function cachingDecorator(func, hash) // multi argument function
// {
//     let cache = new Map(); // create map 
//     return function()
//     {
//         let key = hash(arguments);
//         if(cache.has(key)) // check that given value is in the map or not
//         {
//             console.log("From cache"); // when it will get data directly from map
//             return cache.get(key); // key already available in map then get data from that directly
//         }
//         let result = func.call(this,...arguments); // "this" will use slow() return & arguments take value from user
//         // console.log(this);
//         // console.log(...arguments);
//         cache.set(key,result); // store key and result in cache map 
//         return result;
//     };
// }
// function hash(argu){ // create hash function 
//     let sum = 0;
//     return argu[0]+' , '+argu[1];
// }
// worker.slow = cachingDecorator(worker.slow,hash); // store cachingDecorator function in worker.slow
// console.log(worker.slow(10,15)); // give argument
// console.log(worker.slow(10,15));

//  task 
// let worker = {
//     hash(){ // create function to do sum of all argument
//         let sum = 0;
//         for( let i of arguments) // for loop for take one by one element
//         {
//             sum += i;
//         }
//         console.log("from function");
//         return sum;
//     }
// };
// function cachingDecorator(func)
// {
//     let cache = new Map(); // create map
//     return function(...argu) // give return function
//     {
//         if(cache.has(argu.sort((a,b)=>a-b).join())) // sort the element and check that element is available in map
//         {   console.log("From cache");
//             return cache.get(argu.sort((a,b)=>a-b).join()); // if available then display value from 
//         } 
//         let result = func(...argu); // if value not available then it will use hach();
//         cache.set(argu.sort((a,b)=>a-b).join(),result); // add data in map
//         return result;
//     } 
// }
// worker.hash = cachingDecorator(worker.hash);
// console.log(worker.hash(10,15,12,19));
// console.log(worker.hash(10,12,15,19));
// console.log(worker.hash(15,22,30));

// borrowing mathod
function hash(){
    console.log([].join.call(arguments));
}
hash(15,12,99);

 