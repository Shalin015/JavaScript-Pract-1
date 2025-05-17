"use strict";

// await/async
// async function acb() { // async is a prmise
//     // when we use retrurn in function normal function then acb().then give error. for that we use async before function
//     return 5;
// }
// console.log(acb());
// acb().then((x) => {
//     console.log(x);
// })

async function sbc() { // create async function
    let account1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(12000);
        }, 3000);
    });
    let account2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(15000);
        }, 2000);
    });
    // p1.then(console.log);
    // p2.then(console.log);
    console.log("Fetching Account 1 please wait ...");
    let a1 = await account1; // await wait for promise execution and after that execute another promise
    console.log("Fetch Account 1 : ",a1);
    console.log("Fetching Account 2 please wait ...");
    let a2 = await account2;
    console.log("Fetch Account 2 : ",a2);
    return [a1,a2];
}
console.log("Greeting");
console.log("Checking balance")
let a = sbc();
a.then((value)=>{
    let total = 0;
    total = +value;
    console.log(value);
});