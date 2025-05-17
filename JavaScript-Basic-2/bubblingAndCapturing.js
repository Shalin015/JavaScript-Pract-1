"use strict";

//event.target
// form.onclick = function(event)
// {
//     event.target.style.backgroundColor = 'yellow';
//     setTimeout(()=>{
//         console.log('target = ',event.target.tagName,", this = ",this.tagName);
//         event.target.style.backgroundColor =''
//     },0);
// };

// event.stopPropagation
// form.onclick = function(event)
// {
//     event.target.style.backgroundColor = 'yellow';
//     setTimeout(()=>{
//         console.log('target = ',event.stopImmediatePropogation,", this = ",this.tagName);
//         event.target.style.backgroundColor =''
//     },0);
// };

// capturing
div .addEventListener("click",()=>{console.log("hello");},true); 

// capturing
// for(let elem of document.querySelectorAll('*'))
// {
//     elem.addEventListener("click",e=>console.log(`capturing : ${elem.tagName}`),true); //in capturing it will start target parent <> to child <>
//     elem.addEventListener("click",e=>console.log(`bubbling : ${elem.tagName}`)); // in bubbling it will start target child <> to parent <> 
// }

