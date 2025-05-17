"use strict";


let set = new Set();
let Johan = {
    name : 'Johan',
    age : 23
};
let Max = {
    name : 'Max',
    age : 24
};
let Zen = {
    name : 'Zen',
    age : 25
};

set.add(Johan);
set.add(Max);
set.add(Zen);
set.add(Johan); // data add multiple times
set.add(Max);
set.add(Zen);

console.log(set); // it will remove repeated data
for(let name of set)
{
    console.log(name.name); // display data
}

//task
// function unique(arr){
//     return Array.from(new Set(arr));
// }
// let values=["Hare","Krishna","Hare","Krishna","Krishna","Krishna","Hare","Hare",":-0"];

// console.log(unique(values));