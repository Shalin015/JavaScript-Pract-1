"use strict";

// element from point
// let centerX = document.documentElement.clientWidth / 2; // check window width and half of it
// let centerY = document.documentElement.clientHeight / 2; // check window hieght and half of it
// console.log("Center X : ",centerX); // print the value of width
// console.log("Center Y :",centerY); // print the value of height 
// let elem = document.elementFromPoint(centerX, centerY); // store width and height value in variable
// elem.style.background = 'violet'; // add css in that variable
// console.log(elem.tagName); // print tag where we can add this script

// using for "fixed" position
// let elem = document.getElementById('coords-show-mark'); // select particular id and give reference to new variabale
// function createMessageUnder(elem, html) // create function with elem and html parameter
// {
//     let message = document.createElement('div'); // create one element <div>
//     message.style.cssText = "position : fixed; color : violet"; //add css in that <div>
//     let coords = elem.getBoundingClientRect(); // give information about display    
//     message.style.left = coords.left + "px";
//     message.style.top = coords.bootm + "px";
//     message.innerHTML = html;
//     return message;
// }
// let message = createMessageUnder(elem, 'Hello, world!'); // give pararmeter to function and call
// document.body.append(message); // add function in the <body>
// setTimeout(() => message.remove(),5000); // function automatically remove after 5 sec

// document coordinates
let elem = document.getElementById('coords-show-mark');
function createMessageUnder(elem, html)
{
    let message = document.createElement('div');
    message.style.cssText = "position : absolute; color : violet";
    let coords = getCoords(elem);
    message.style.left = coords.left + 'px';
    message.style.top = coords.bottom + 'px';
    message.innerHTML = html;
    return message;
}
let message = createMessageUnder(elem, ' welcome');
document.body.append(message);
