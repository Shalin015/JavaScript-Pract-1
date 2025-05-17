"use strict";

// schedul function execution time
// function sum(a,b){
//     console.log(a + b);
// }
// setTimeout(sum,5000,15,25);

// also 
// setTimeout(()=>console.log("Hello"),6000);

//cancel scheduling
let timerId = setTimeout(()=>console.log(1512),1000)
alert(timerId); // timerId will not display null value or Not a Number
clearTimeout(timerId);
alert(timerId); // it will diplay random number

// Interval
// let timerId = setInterval(()=>console.log("Welcome"),2000); // after 2 sec it will repeat and print welcome
// setTimeout(()=>{clearInterval(timerId); console.log("Stop");},10000); // it will stop interval after 10 sec

