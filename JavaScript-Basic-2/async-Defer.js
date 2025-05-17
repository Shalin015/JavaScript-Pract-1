"use strict";

//script : async, defer

// defer
// document.addEventListener('DOMContentLoaded',()=>{
//     console.log("DOM ready after defer!")
// });

// async
// document.addEventListener('DOMContentLoaded',()=>{
//     console.log('DOM is ready');
// })

// Dynamic script
// let script = document.createElement('script'); // create element
// script.src="/article/script-async-defer/long.js"; // add attribute 
// // it will by defeault take async= true
// document.body.append(script);

let script = document.createElement('script');
script.src="/article/script-async-defer/long.js";
script.async=false;
document.body.append(script);