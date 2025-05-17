"use strict";

// preventing browser actions
menubar.onclick = function(event)
{
    if(event.target.nodeName != 'A')
        return;
    let href=event.target.getAttribute('href');
    console.log(href);
    return false;
};