"use strict";

// promises 
// let promise = new Promise(function(resolve,reject){
//     console.log("inside promise hello");
//     resolve(56);
// })
// console.log('Hello 1');
// setTimeout(() => {
//     console.log('Hello 2');
// }, 3000);
// console.log('Hello 3');
// console.log(promise);

// multiple process run parellaly
let p1 = new Promise((resolve,reject)=>{ // create promise to execute 
    console.log('Promise 1 is pending');
    setTimeout(()=>{ // set time after that execute this promise
        resolve(true); // give here resolve value so this promise execute with value
    },3000);
});
let p2 = new Promise((resolve,reject)=>{ // create promise to execute 
    console.log('Promise 2 is pending');
    setTimeout(()=>{ // set time after that execute this promise
        reject(new Error("I got some error")); // it will so error because here reject get some error
    },3000);  
});
console.log("Promise 1 : ",p1);
console.log("Promise 2 : ",p2);
p1.then((value)=>{ // after promise execute i want to do any action 
    console.log("Promise 1 value : ",value);
})
p2.catch((error)=>{  // when i dont want any error
    console.log("Got some error in promise 2");
}); 
p2.then((value)=>{ // after promise execute i want to do any action
    console.log(value);
},(error)=>{ //catch 
    console.log(error);
}
);