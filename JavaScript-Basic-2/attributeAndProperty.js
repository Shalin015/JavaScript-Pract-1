"use strict";

// DOM properties
// document.body.myData = { // it will add myData attribute in body and add data inside it
//     name : "Max",
//     title : 'Clark'
// };
// console.log(document.body.myData.title);  // in give data particular data will print

// check which tag it is
// document.body.firstElementChild.sayTagName = function() // create function it will target to first child element of body
// {
//     console.log(this.tagName); // display first child element of the body
// };
// console.log("body first child element : ",document.body.firstElementChild);
// document.body.firstElementChild.sayTagName(); // it will display targeted <>

// create function which display which tag it is
// Element.prototype.sayHi = function() // create function to display particular tag using address
// {
//     console.log(`Hello, I am ${this.tagName}`);
// };
// document.documentElement.sayHi();
// document.body.sayHi();

// HTML attribute
// console.log(document.body.firstElementChild.id); // it will display body first child id attributes
// console.log(document.body.firstElementChild.style); // it will display body first child style attributes

// console.log(input.type); // in input tag type attribute value
// console.log(body.type); // in body tag type attribute

// console.log(document.body.getAttribute('something'));

// property attributes synchronization but this is possible only in standard attributes
// let input = document.querySelector('input'); // select particular tag 
// input.setAttribute('type','text'); // add there attribute with value
// console.log(input.type); // display attribute value
// input.type = 'checkbox'; // change attribute value
// console.log(input.getAttribute('type')); // again display

// input.setAttribute('class','text');
// console.log(input.className);
// input.className = 'text1';
// console.log(input.getAttribute('class'));
// console.log(document.body.innerHTML);

// DOM properties are typed
// console.log(input.getAttribute('checked')); // select checked attribute
// console.log(input.checked); // it will check that input tag has checked attribute

// Non standard attributes dataset
let user = {
    name : "Pete",
    age : 25
}
for(let div of document.querySelectorAll('[show-info]'))
{
    let field = div.getAttribute('show-info');
    div.innerHTML = user[field];
}  