"use strict";

// document.getElementById
// let elem = document.getElementById('elem'); // it will check which <> id=elem
// elem.style.background = 'violet'; // add style attribute inside that background = violet
// elem.style.color = 'white'; // inside style attribute add one more property color = white

// QuerySelectorAll
// let elements = document.querySelectorAll('ul> li:last-child');// it will go <ul> and then <li> and target last <li> 
// for(let elem of elements) //for lop for check multiple <ul> and take last <li> value
// {
//     console.log(elem.innerHTML); // print that value
// }

// matches
// console.log(document.body.children); /<body> any other <> are use that display 
// for(let elem of document.body.children) // take element of <body> one by one
// {
//     if(elem.matches('a[href$="com"]') || elem.matches('a[href$="zip"]')) // match that in link at last position will be com or zip will go inside
//     {
//         console.log("The archive reference : ",elem.href);// if at last position com or zip available then it will print
//     }
// }
// console.log(document.body.children[2].attributes)

// closest
// let chapter = document.querySelector('.Chapter'); // select class chapter used <>
// console.log(chapter.closest('.book')); // check that book is child of chapter
// console.log(chapter.closest('.contents')); // check that contents is child of chapter
// console.log(chapter.closest('h1')); // check that h1 is child of chapter

let divs = document.querySelector('#div1')
console.log(divs.closest('#div2'));

// get Element By
// let inputs = table.getElementsByTagName('input'); // it will select tag
// for(let input of inputs)
// {
//     console.log(input.value,' : ',input.checked);
// }

// let divs = document.getElementsByTagName('div');
// console.log(divs.length);