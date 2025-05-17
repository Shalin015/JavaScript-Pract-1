"use strict";

// Promise API
let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("value 1");
    },2000);
});
let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 2");
    },3000);
});
let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 3");
    },4000);
});
let p4 =new Promise((resolve,reject)=>
{
    setTimeout(()=>{
        resolve(new Error('I got an error'));
    },5000);
})
//if i want to execute all promise together
let promise_all = Promise.all([p1,p2,p3]); // this will create array of all promise but it will not work when promise is rejected
promise_all.then ( (value) => { // if array create and all promise is added then this will execute
    console.log(value); // it will print after 4 sec
} )
// if we 
let promise_settled = Promise.allSettled([p1,p2,p3,p4]); // if any promise got error and want to execute other promises
promise_settled.then((value)=>{
    console.log(value); 
})
let promise_race = Promise.race([p1,p2,p3,p4]); // if any promise execute first it will print but if promise get error so it will print error
promise_race.then((value)=>{
    console.log(value);
})
let promise_any = Promise.any([p1,p2,p3,p4]); // if you want first execute promise but not a error one then use
promise_any.then((value)=>{
    console.log(value);
})
let promise_resolve = Promise.resolve([p1,p2,p3,p4]); // if you want to make promise with resolve value
promise_resolve.then((value)=>{
    console.log(value);
})
let promise_reject = Promise.reject([p1,p2,p3,p4]); // if you want to make promise with reject value    qa  
promise_reject.then((value)=>{
    console.log(value);
})