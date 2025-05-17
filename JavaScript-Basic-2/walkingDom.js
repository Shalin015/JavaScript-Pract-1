"use strict";

// walking Dom
// console.log("From Head : ",document.head); // display header nodes
// console.log("From body : ",document.body); // display body nodes

// diplay nodes are available in html file
// for(let i = 0; i < document.body.childNodes.length; i++){
//     console.log(document.body.childNodes[i]);
// }

// child node
// console.log(document.body.childNodes.filter);
// console.log(Array.from(document.body.childNodes).filter);

// parent node and child node

// console.log(document.body.parentNode === document.documentElement); // body.parentNode = <html> & documentElement = <html> 
// console.log(document.head.nextSibling); // <head> next sibling node <body> and display text
// console.log(document.head.nextElementSibling); // <head> next sibling node <body> and target <body>
// console.log(document.body.previousSibling); // <body> previous sibiling node <head>

// console.log(document.documentElement.parentNode); // it will display <html> document
// console.log(document.documentElement.parentElement); // it will display <html> parent <>
// console.log(document.documentElement); //document.documentElement = <html>

// element only navigation
// for(let elem of document.body.children) // it will use <body> and take one by one tag inside the bodys
// {
//     console.log(elem); // it will display body inside tags
// }

// more link table
// console.log(table.rows[0].cells[0]); 
for(let i = 0; i < table.rows.length; i++) // i=0, i = row length, i++
{
    let td = table.rows[i].cells[i]; // first it wil take table cells of number i
    td.style.backgroundColor = "red"; // fill that cell with red color
}
