"use strcit";

// attacting multiple handlers to a promise
// let p1 = new Promise((resolve,reject)=>{
//     console.log("Hey i am out for execution");
//     setTimeout(()=>{
//         resolve(1);
//     },3000);
// })
// p1.then(()=>{ // here after task execute this will run
//     console.log("promise load")
// });
// p1.then((value)=>{ // here after task execute this will run 
//     console.log(value);
// })
// here both then execute together and this is call multiple handler promies

let promise1 = new Promise((resolve,reject)=>{
    console.log("Pormise 1");
    resolve("Good Morning");
});
let promise2 = new Promise((resolve,reject)=>{
    console.log("Pormise 2");
    resolve("Good Morning");
});
let promise3 = new Promise((resolve,reject)=>{
    console.log("Pormise 3");
    resolve("Good Morning");
});
let promise4 = new Promise((resolve,reject)=>{
    console.log("Pormise 4");
    resolve("Good Morning")
});
promise1.then((value)=>{
    console.log("Promise 1 : ",value);
}).then(()=>{
    promise2.then((value)=>{
        console.log("promise 2 : ",value);
    })
}
)
