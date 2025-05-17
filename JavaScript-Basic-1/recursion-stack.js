"use strict";

// recursion think
// function pow(a,b) // a : value & b : power
// {
//     if(b === 1) // if b === 1 then it will return it self value
//     {
//         return a; 
//     }
//     else {
//         return a * pow(a, b-1); // a^b = a*(a^b-1)
//     }
// }
// console.log(pow(5,5));
// //normal think
// function pow(a,b)
// {
//     let result = 1;
//     for(let i = 0 ; i < b ; i++) // b number of time loop will run
//     {
//             result = result * a; // multiply one by one
//     }
//     return result;
// }
// console.log(pow(5,5));

// sum of the nuumber
// function sumTo(n) {
//     let date1 = new Date();
//     let result = 0;
//     for (let i = 1; i <= n; i++) {
//         result += i;
//     }
//     let date2 = new Date();
//     console.log(`Process time : ${date2 - date1} ms`);
//     return result;
// }
// console.log(sumTo(5));
// // recursion think
// function sumOf(n)
// {
//     if(n === 1)
//         return n;
//     else
//         return n + sumTo(n-1);
// }
// console.log(sumOf(5));

// factorial 
function fact(n)
{
    if(n === 0)
        return 1;
    else
        return n * fact(n-1);
}
console.log(fact(5));