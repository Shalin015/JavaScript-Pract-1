"use strict";

// DOM node classes
// console.log(document.body.constructor.name); // HTMLBodyElement
// console.log(document.body);

// console.log(document.body instanceof HTMLBodyElement);
// console.log(HTMLBodyElement);

// console.log(document.body instanceof HTMLElement);
// console.log(HTMLElement);

// console.log(document.body instanceof Element);
// console.log(Element);

// console.log(document.body instanceof Node);
// console.log(Node);

// console.log(document.body instanceof EventTarget);
// console.log(EventTarget);

// nodeType
// let elem = document.body;
// console.log(elem.nodeType); // 1 this all have pre define value
// console.log(elem.firstChild.nodeType); // 2
// console.log(document.nodeType); // 3

// nodeName and tagName
// console.log(document.body.firstChild.tagName); // undefine
// console.log(document.body.firstChild.nodeName); // #text
// console.log(document.head.childNodes);
// console.log(document.head.firstChild.tagName);

// add element in inside the <body>
// console.log(document.body.innerHTML); // inside <body> all the data will display
// document.body.innerHTML = 'The new BODY!'; // in body it will display the new body!

// convert string into code 
// document.body.innerHTML = '<b>test'; // in string forget to close tag"
// console.log(document.body.innerHTML); // it wil automatically fixed while display

// convert string into code 
// document.body.innerHTML += "<div> Hello <img src = 'smile.gif'/> !</div>"; // it will consider string as a code
// document.body.innerHTML += "How goes?";

// add element in particular tag
// document.body.innerHTML = "..."; // inside body tag it will add ... at last
// console.log(document.body.innerHTML);

// add element in particular tag
// elem.innerHTML += "..."; // in any tag use id=elem in that tag at last add ...
// console.log(elem.innerHTML);
// elem.innerHTML = elem.innerHTML + "..."; // it will print ......

// outerHTML it will consider that that tag is out of the <html>
// console.log(elem.outerHTML);

let div = document.querySelector('div')
// div.outerHTML = '<p> A is new element</p>';
// console.log(div.outerHTML); //it will reflect on browser not in backend
// div.innerHTML = '<p>hello</p>' 
// console.log(div.innerHTML); // it will reflect on both in backend and also on browser
console.log(document.body.innerHTML);

// text content : pure text
// console.log(news.textContent)

// difference between innerHTML and textContent
// let name = prompt("What's your name?", "<b>Winnie-the-Pooh!<b>");
// elem.innerHTML = name; // consider as a code
// news.textContent = name; // consider as a string

// hidden property
// Element.hidden = true;

// setInterval(()=>news.hidden = !elem.hidden,4000);