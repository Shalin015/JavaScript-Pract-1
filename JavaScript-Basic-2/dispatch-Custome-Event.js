"use strict";

// dispatch event
// let event = new Event("Click");
// elem.dispatchEvent(event);

// document.addEventListener("hello",function(event){ // let event come in this function
//     console.log("Hello from ",event.target.tagName); // print that give event happen in which tag
// });
// let event = new Event("hello",{bubbles: true}); // "hello" event add in event
// elem.dispatchEvent(event); // elem = <h1 id="elem"> dispatch event 

// mouse event
// let event = new MouseEvent("Click",{
//     bubbles : true,
//     cancelable : true,
//     clientX : 100,
//     clientY : 100,
// });
// console.log(event);
// console.log(event.clientX);

// custom event
// elem.addEventListener("hello",function(event){ //call elem.dispatchEvent
//     console.log(event.detail.name); // display details of object
// });
// elem.dispatchEvent(new CustomEvent("hello",{ // elem=<h1 id=elem>
//     detail : { // add object
//         name : "Johan"
//     }
// }));

// event.preventDefault()
function hide()
{
    let event = new CustomEvent("hide",{
        cancelable : true
    });
    if(!rabbit.dispatchEvent(event))
    {
        console.log('The action was prevented by a handler');
    }
    else
    {
        rabbit.hidden = true;
    }
}
rabbit.addEventListener('hide',function(event)
{
    if(confirm("call preventDefault?"))
    {
        event.preventDefault();
    }
});