"use strict";

// Event handler

// HTML-Attribute
// function countRabbits()
// {
//     for(let i=0; i<=3; i++)
//     {
//         console.log("Rabbit number : ",i);
//     }
// }

// elem.onclick = function() // select elem id tag and add create function to add event on click
// {
//     console.log('Thank you'); // onclick it will print thank you
// };

// function welcome() // create function to do any event
// {
//     console.log('Welcome');
// }
// elem.onclick = welcome; // select tag which use elem id and call function inside it

// elem1.onclick = function() // select elem1 id tag and create function to add event on click
// {
//     console.log('override onclick'); // if inside onclick property give then it will override that event
// };

// add event listner
// elem2.addEventListener("click",()=>console.log("add event listner"));

// multiple function call
// function handler1()
// {
//     setTimeout(()=>{
//         console.log('Function-1 call');
//     },2000);
    
// }
// function handler2()
// {
//     setTimeout(()=>{
//         console.log('Function-2 call');
//     },3000);
    
// }
// elem3.onclick = ()=> setTimeout(()=>{
//     console.log("arrow function call");
// },1000);
// elem3.addEventListener('click',handler1);
// elem3.addEventListener('click',handler2);

// event object
// elem.onclick = function(event){ // using id we can run function 
//     console.log(event.type," at ",event.currentTarget); //display tag which we target
//     console.log("coordinate : ",event.clientX," : ",event.clientY); //give dtails about window X-axis & y-axis
// };

// on mouse event
// class Menu{
//     handleEvent(event){
//             switch(event.type)
//             {
//                 case 'mousedown':
//                     elem.innerHTML = "Mouse button  pressed";
//                     break;
//                 case 'mouseup':
//                     elem.innerHTML = "...and released";
//                     break;
//             }
//     }
// }
// let menu = new Menu();
// elem.addEventListener('mousedown',menu);
// elem.addEventListener('mouseup',menu);




