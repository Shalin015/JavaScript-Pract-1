"use strict";

// mouse event

// shift,alt,ctrl and meta
// button.onclick = function(event)
// {
//     if(event.altKey && event.shiftKey)
//     {
//         console.log('Hooray!');
//     }
// };

// mouseover and mouseout
// container.onmouseover = container.onmouseout = handler;
// function handler(event)
// {
//     function str(el)
//     {
//         if(!el)
//             return "null";
//         return el.className || el.tagName;
//     }
//     log.value += event.type+" : "+'target = '+str(event.target)+', relatedTarget = '+str(event.relatedTarget)+" \n ";
//     log.scrollTop = log.scrollHeight;

//     if(event.type == 'mouseover')
//     {
//         event.target.style.background='violet'
//     }
//     if(event.type == 'mouseout')
//     {
//         event.target.style.background=''
//     }
// }

// skipping element
// let parent = document.getElementById('parent');
// parent.onmouseover = parent.onmouseout = parent.onmousemove = handler;

// function handler(event) {
//   let type = event.type;
//   while (type.length < 11) type += ' ';

//   log(type + " target=" + event.target.id)
//   return false;
// }


// function clearText() {
//   text.value = "";
//   lastMessage = "";
// }

// let lastMessageTime = 0;
// let lastMessage = "";
// let repeatCounter = 1;

// function log(message) {
//   if (lastMessageTime == 0) lastMessageTime = new Date();

//   let time = new Date();

//   if (time - lastMessageTime > 500) {
//     message = '------------------------------\n' + message;
//   }

//   if (message === lastMessage) {
//     repeatCounter++;
//     if (repeatCounter == 2) {
//       text.value = text.value.trim() + ' x 2\n';
//     } else {
//       text.value = text.value.slice(0, text.value.lastIndexOf('x') + 1) + repeatCounter + "\n";
//     }

//   } else {
//     repeatCounter = 1;
//     text.value += message + "\n";
//   }

//   text.scrollTop = text.scrollHeight;

//   lastMessageTime = time;
//   lastMessage = message;
// }

// function mouselog(event)
// {
//     let d = new Date(); // target date function 
//     text.value += `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} | 
//         ${event.type} [target: ${event.target.id}]\n`.replace(/(:|^)(\d\D)/,'$10$2'); //it will display time | event type [target : target id]
//     text.scrollTop = text.scrollHeight;
// }

// scroll
window.addEventListener('scroll',function(){
    console.log(document.getElementById('showscroll').innerHTML=window.pageYOffset + 'px');

});