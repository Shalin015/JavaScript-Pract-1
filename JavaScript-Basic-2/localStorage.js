"use strict";

// localstorage demo
// console.log(localStorage.getItem('test'));

// localStorage.test=2;
// delete localStorage.test;
// console.log(localStorage.test);

for(let i=0; i<localStorage.length; i++)
{
    let key = localStorage.key(i);
    alert(`${key} : ${localStorage.getItem(key)}`);
}
