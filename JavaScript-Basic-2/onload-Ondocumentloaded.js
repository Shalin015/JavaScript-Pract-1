"use strict";

// DOMContentLoaded
// function ready(){
//     console.log('DOM is ready'); // whle page loading it will call this function and it will display
//     console.log(`Image size : ${img.offsetWidth}x${img.offsetHeight}`); // before load img it will display offsetWidth and offsetHeight
// }
// document.addEventListener("DOMContentLoaded",ready); // addEventListener("DOMContentLoaded") it display one by one by element as it will load in DOM

// Second way to done this
// document.addEventListener("DOMContentLoaded",()=>{ // when dom is loading then it will go inside the arrow function
//     console.log('Dom is Loading...'); // when function call it will display
// });

// window.onload
// window.onload = function(){ // when window fully load after that it will call function 
//     console.log("window loaded"); // when function call it will display this
//     console.log(`image size : ${img.offsetWidth} x ${img.offsetHeight}`); // and it will display image size
// };

// window.onunload
// let analyticsData = {};
// window.addEventListener("unload",()=>{
//     navigator.sendBeacon("/analytics", JSON.stringify(analyticsData));
//     console.log(sendBeacon);
// })

// second way of onunload
// window.onunload = function() // before window load it will call this function
// {
//     console.log("DOM is unload"); // before load window it will display this
// }

// window.beforeunload
window.onbeforeunload = function()
{
    return 'onbeforeunload';
}

// readyState
// console.log(document.readyState); // when window is loading it will display loading
// document.addEventListener('readystatechange',()=>{
//     console.log(document.readyState); // it will display every state when window is loading to load
//     // it will display loading= when window is loading, interactive= when data is readable, complate= when data and resourec fully load
// })