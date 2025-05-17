"use strict";

// Blob as URL
// let blob = new Blob(["hello, World!"],{type: 'text/plain'});  // add data and in {type} it will give extension 
// link.href = URL.createObjectURL(blob); // it will select id=link in that tag select href

// second way
// let link = document.createElement('a');
// link.download = "hello.txt"; 
// let blob = new Blob(['Thank you for download'],{type:'text/plain'});
// link.href = URL.createObjectURL(blob);
// link.click();
// URL.revokeObjectURL(link.href);

let link = document.createElement('a');
link.download = 'hello.txt';
let blob = new Blob(['Thank you again'],{type:'txt/plain'});
let reader = new FileReader();
reader.readAsDataURL(blob);
reader.onload = function()
{
    link.href = reader.result;
    link.click();
};
