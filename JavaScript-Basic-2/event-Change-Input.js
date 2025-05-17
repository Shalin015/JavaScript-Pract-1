"use strict";

// event input 
// input.oninput = function()
// {
//     result.innerHTML = input.value;
// }

// event cut copy paste
input.onpaste = function(event)
{
    console.log("paste : "+event.clipboardData.getData('text/plain'));
    event.preventDefault();
};
input.oncut = input.oncopy = function(event)
{
    console.log(event.type+' - '+document.getSelection());
    event.preventDefault();
};