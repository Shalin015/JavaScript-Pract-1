"use strict";

// event-loop

// splitting CPU hunger task

// let i = 0; // create variable 
// let start = Date.now(); // store starting time in start variable
// function count() // create a function
// {
//     for(let j = 0; j < 1e9; j++) // this loop run 1000000000 times
//     {
//         i++; // it will increase 'i' value with 1000000000 times
//     }
//     console.log("Done in "+ (Date.now() - start) + 'ms'); // aft6er loop how much time it will take to execute that count
// }
// count(); // call function to run

// another way
// let i = 0;
// let start = Date.now();
// function count()
// {
//     do
//     {
//         i++;
//     }
//     while(i % 1e6 != 0);
//     if(i == 1e9)
//     {
//         console.log('Done is : '+(Date.now()-start) + 'ms');
//     }
//     else
//     {
//         setTimeout(count);
//     }
// }
// count();

// Progress indication
// function count()
// {
//     for(let i = 0; i < 1e6; i++)
//     {
//         i++;
//         progress.innerHTML = i;
//     }
//     console.log(document.body.innerHTML);
// }
// count();

// doing something after event
// menu.onclick = function()
// {
//     let customEvent = new CustomEvent("menu-open",{
//         bubbles : true
//     });
//     setTimeout(()=>{
//         menu.dispatchEvent(customEvent);
//     })
// }

// Macrotask & microtask
setTimeout(()=>{ // due to setTimeout it will go to callback so it will print after execution (macrotask)
    console.log("Time out");
})
Promise.resolve().then(()=>{ // here promise print second and after promise it will execute .then (microtask)
    console.log("Promise")
});
console.log("code"); // first in execution it will print 