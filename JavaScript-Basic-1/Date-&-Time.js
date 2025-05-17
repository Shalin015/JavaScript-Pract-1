"use strict";

// let current = new Date();
// console.log(current);

// add time and check date is change
// let startDate = new Date(0);
// console.log(startDate);
// // add time (hr * sec * milisec)
// let addTime = new Date(24 * 3600 * 1000);
// console.log(addTime);

//new date set
// let date = new Date(2015,11,15,0,0,0,0);
// let date1 = new Date(2015,11,15);
// console.log(`New date set : ${date}`);
// console.log(`Date1 set : ${date1}`);

//get keyword
// let date = new Date();
// console.log(`Year : ${date.getFullYear()}`);
// console.log(`Month : ${date.getMonth()}`);
// console.log(`Date : ${date.getDate()}`);
// console.log(`Day : ${date.getDay()}`);
// console.log(`Hours : ${date.getHours()}`);
// console.log(`Minute : ${date.getMinutes()}`);
// console.log(`Seconds : ${date.getSeconds()}`);
// console.log(`Milisecond : ${date.getMilliseconds()}`);

// check process time
let date1 = new Date();
for(let i = 0; i < 5000000; i++)
{
    let work = 2;
}
let date2 = new Date();
console.log(`Take time to process : ${date2 - date1} ms`);