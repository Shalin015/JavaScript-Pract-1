"use  strict";

// check inside if condtion created variable are access from outside 
// if(true) 
// {
//     let str = 'Johan Mike';
//     console.log('Inside if condtion : ',str); //inside if we create variable it will only use inside the if
// }
// console.log('Access string outside of th if : ',str); // undefine 

//nested function
// function count()
// {
//     let counts = 0;
//     return function(){
//         return counts++; // count function how much time call
//     };
// }
// let counter = count(); // function give reference
// console.log(counter());
// console.log(counter());
// console.log(counter());

// check function can access outside variable
// function a(){
//     console.log(b);
//     function c()
//     {
//         console.log(b);
//     }
//     c();
// }
// a();
// var b = 15;

// garbage collector
// function f(){
//     let value = 1512;
//     return function(){
//         console.log(value)
//     }
// }
// let g = f(); // function store in g  
// console.log(g());
// g = null;
// console.log(g());

function f(){
    let value = Math.random();
    function g(){
        debugger;
        console.log(value); 
    }
    return g;
}
let g = f();
g();