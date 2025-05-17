"use strict";

//fetch abort
let controller = new AbortController();
let signal = controller.signal;
signal.addEventListener('abort', () => 
{
    console.log('abort!');
});
controller.abort();
console.log(signal.aborted);
