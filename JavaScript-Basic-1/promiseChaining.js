"use strict";

// Promise Chaining
// let p1 = new Promise((resolve,reject)=>{ // create promise
//     setTimeout(()=>{ // set interval after that resolve set value
//         console.log("Promis run after 3 sec");
//         resolve(56);
//     },3000); // execute after 3 sec
// });
// p1.then((value)=>{ // after 3 sec task execute this wil call  
//     console.log(value);
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>
//         {
//             resolve("Promise 2");
//         },3000);
//     });

// }).then((value)=>{ // after promise 2 this will execute
//     console.log(value);
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Promise 3");
//         },3000); 
//     });
// }).then((value)=>{ after promise 3 this will execute
//     console.log(value);
// });
// here when we use one handler and inside we use multiple .then directly it will call promise chaining

// loadscript with promise
let loadScript = (src) => { // src = "script url"
    return new Promise((resolve, reject) =>  // create promise inside loadscript
    {
        let script = document.createElement('script');
        script.type = "text/javascript";
        script.src = src; // add script url in <script src="url">
        document.body.appendChild(script);
        script.onload = () => {
            resolve(1);
            console.log("Welcome");
        }
        script.onerror = () => 
        {
            reject(0);
        }
    });
}
let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js") // add script url in loadscript function
p1.then((value) => { // after load script
    console.log(value);
}).catch((error)=>{
    console.log("Getting issue to load script")
})