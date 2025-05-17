"use strict";

// popup-windows
// window.open('https://javascript.info');

// popup blocking
// window.open('https://javascript.info');
// button.onclick = () => 
// {
//     window.open('https://javascript.info');
// }

// minimalistic window
let params = 'scrollbars = no, resizable = no, status = no, loaction = no, toolbar = no, menubar = no, width = 600, height = 300, left = 100, top = 100';
// it will manage redirect window size
open('/','test',params);