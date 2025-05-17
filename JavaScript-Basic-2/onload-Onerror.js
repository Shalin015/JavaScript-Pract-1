"use strict";

// onload onerror

// onload
// let script = document.createElement('script'); // create script element
// script.src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js";
// document.body.append(script);
// script.onload = function() // after load script it will call this function
// {
//     console.log( _.VERSION ); // here _ will create new variable and VERSION check liberary version
// }

// script.onerror
// let script = document.createElement('script');
// script.src="https://example.com/404.js";
// document.body.append(script);
// script.onerror = function() // when any error occure in script it will call this function
// {
//     console.log("Error loading ",this.src); // display error with the script
// };

// other resource
// let img = document.createElement('img');
// img.src = "https://js.cx/clipart/train.gif";
// document.body.append(img);
// img.onload = function()
// {
//     console.log(`Image loaded, size ${img.width} x ${img.height}`);
// };
// img.onerror = function()
// {
//     console.log('error occure');
// }

// crossorigin policy
window.onerror = function(message, url, line, col, errorObj)
{
    console.log(`${message}\n${url},${line}:${col}`);
};