"use strict";

// New way to create function
// let func = new Function('a','b','return a + b');
// console.log(func(15,12));

// Clouser
function getFunction()
{
    let value = "test";
    let Func = function(){
        console.log(value);
    }
    return Func;
}
getFunction()();